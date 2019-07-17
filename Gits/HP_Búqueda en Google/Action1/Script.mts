'Lanzamiento del Navegador
SystemUtil.Run "iexplore.exe","www.google.com"

'Declaracion de objetos

Set objBrowser = Browser("Google").Page("Google")
Set txtBuscar = objBrowser.WebEdit("Buscar")
Set btnBuscador = objBrowser.WebButton("Buscar con Google")


'Declaracion de flujo 

'Realizar busqueda
txtBuscar.set "Microfocus"

'Clic en buscar
btnBuscador.Click
