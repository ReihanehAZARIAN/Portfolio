$ErrorActionPreference="Stop"
Add-Type -AssemblyName System.Runtime.WindowsRuntime
Add-Type -AssemblyName System.Drawing
[Windows.Storage.StorageFile,Windows.Storage,ContentType=WindowsRuntime] > $null
[Windows.Data.Pdf.PdfDocument,Windows.Data.Pdf,ContentType=WindowsRuntime] > $null
[Windows.Storage.Streams.InMemoryRandomAccessStream,Windows.Storage.Streams,ContentType=WindowsRuntime] > $null
$asTask=([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {$_.Name -eq 'AsTask' -and $_.IsGenericMethod -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1'})[0]
function Await($op,$type){$task=$asTask.MakeGenericMethod($type).Invoke($null,@($op));$task.Wait();$task.Result}
$pdfStream=[Windows.Storage.Streams.InMemoryRandomAccessStream]::new()
$writer=[System.IO.WindowsRuntimeStreamExtensions]::AsStreamForWrite($pdfStream)
$bytes=[IO.File]::ReadAllBytes('C:\Users\Alireza\Documents\GitHub\Portfolio\assets\portfolio.pdf')
$writer.Write($bytes,0,$bytes.Length);$writer.Flush();$pdfStream.Seek(0)
$pdf=Await ([Windows.Data.Pdf.PdfDocument]::LoadFromStreamAsync($pdfStream)) ([Windows.Data.Pdf.PdfDocument])
$out='C:\Users\Alireza\Documents\GitHub\Portfolio\assets\projects'
$encoder=[Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object {$_.MimeType -eq 'image/jpeg'}
$params=[Drawing.Imaging.EncoderParameters]::new(1);$params.Param[0]=[Drawing.Imaging.EncoderParameter]::new([Drawing.Imaging.Encoder]::Quality,[long]94)
$covers=@(5,8,12,15,20,24,26,28,33,37,40,44,48,51)
foreach($n in 5..63){
 if($n -in @(32,43,53)){continue}
 $page=$pdf.GetPage($n-1);$stream=[Windows.Storage.Streams.InMemoryRandomAccessStream]::new()
 $opts=[Windows.Data.Pdf.PdfPageRenderOptions]::new();$opts.DestinationWidth=3000
 $op=$page.RenderToStreamAsync($stream,$opts)
 $actionTask=([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {$_.Name -eq 'AsTask' -and -not $_.IsGenericMethod -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction'})[0]
 $actionTask.Invoke($null,@($op)).Wait()
 $net=[System.IO.WindowsRuntimeStreamExtensions]::AsStreamForRead($stream)
 $bmp=[Drawing.Bitmap]::new($net)
 $name='page-{0:D2}-large.jpg' -f $n
 $bmp.Save((Join-Path $out $name),$encoder,$params)
 if($n -in $covers){
  $height=418;if($n -eq 15){$height=400}
  $rect=[Drawing.Rectangle]::new(100,230,1850,($height*2.5))
  $crop=$bmp.Clone($rect,$bmp.PixelFormat)
  $crop.Save((Join-Path $out ('cover-{0:D2}.jpg' -f $n)),$encoder,$params);$crop.Dispose()
 }
 $bmp.Dispose();$net.Dispose();$stream.Dispose();$page.Dispose()
 Write-Output $name
}
