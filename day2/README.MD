- CSS have order for example :
    <p class="RedColor BlueColor GreenColor">This is my text</p>
 .RedColor {
    background-color:tomato;
}
.BlueColor{
    background-color:aqua;
}
.GreenColor{
    background-color:green;
}
the color will be Green if you change  <p class="RedColor GreenColor BlueColor">This is my text</p>
it still green

if you are you class="key man" the charater is ".key {} .man {}" 
if you use id="key" the charater is "#key  {}"

<p class="RedColor GreenColor BlueColor">
-> class can have multiple name but id should be the one

<p id="RedColor GreenColor BlueColor"> -> it will not working 
<p id="RedColor"> -> only this