# Frontend ASMA

- it is build using Reactjs & Reduxjs.

## SignUp & LoginIn Form:

- SignUp and Login form hmare pass public honge lekin root of the aplication baghair token ke access nhi krskta hai user, to hm user ko redirect krdeinge signup krne ke liye.
- SignUp aur LogIn form ki Apis, aik user aur aik auth api hai jo hmne bnai hai to jo chezein req.body mein hmare pass arhi hngi unko hm frontend se form mein leinge user se aur yh hai asal agenda.
- phle hm mock data pe frontend bnaleinge aur phr hm apne pass is frontend ko backend ki apis se connect krleinge.
- SignUp form bnarhe hain hm aur yh form ke tag mein bnega html ke aur ismein jitni fields hngi unko hm input mein bnaleinge aur uske ilawa js se validations ko check krleinge hm apne pass.

## Layout Component:

- yh aik nae learning mili hai ke layout ke component ke andar hmne sare components ko call krna ha props.Children mein jo defin e kra hai hmne aur dynamic bnadia hai.
- sb hm yh kreinge ke apne App.js file mein Layout call krleinge.
- Layout mein Navbar hmne call kra wa hai already uper uske ilawa hm props.children jo khrhe hain to sbkuch jo bhi hm andar call kreinge <layout></layout>tag ke andar - wo sb kuch to bs hmara aega layout.children ke andar.
- Hmne jo layout component bnaya hai uski asal waja yh hai ke hmare pass signup ka alag layout hoga hmare pass login ka alag layout hoga hmare pass.
- State bnake checks lgadeinge hm aur phr us trhn se hm work krleinge according to out requirement.

## Styling:

- App.css mein hm kuch ultimate styles apply krelinge apne pass.
- *{}, box-sizing,margin,padding:0 - zero jese.
- border-bottom: 5px solid blue;  -- isse neche border ajaega solid blue color ka hmare pass.
- parent div bnana important hai hmein jiske uper hmein styling apply krni hai yh key hai isse hm sahi styling krleinge.
- Style krte we agar kisi div ko dekhna hai hmne to hm yh dekheinge with the help of background color ke bg color dalke pta chaljaega container knsa hai
- width krrhe hain 500px - kisi container ki width 500px derhe hain aur uski hm width 100% bhi derhe hain iska mtlb hai -- totakl width hai container ki 500px aur 100% se pori width capture krke rkho.
- .auth-containerform .form-control input[type="submit"] -- input type submit wala jo hai isko hnne css selecter se select krlia hai aur ab hm isko style krre hain.
- hover apply krrhe hain pori selected class ke uper aur hover pe background color change hojae hmara.
- padding,margin,background-color,color -- yh hi bas main chezein hain hmare pass css ki.
- 
.auth-container form input[type="submit"]:active {
  transform: scale(0.95);
}
- is button pe jb hmare pass active apply ho mtlb jb press hoga button tb yh chota krde ise thora




#### Extra Learning:
- src mein components ka aik folder bnalete hain.
- components mein auth ka folder bnarhe hai aur usmein hmare pass login aur signup hoga.
- components ke andar layout ka folder bnarhe hain uske andar hmare pass header, footer navbar hoga.
- Layout aik component bnarhe hain joke har jaagh call hoga kionke layout application ka pori same rhega hmare pass aur usmein hm props.children mein sare components call krrhe hnge to hmari application ka layout same rhega all the way.
- input mein id ke attribute se hm change ko track krleinge aur name ka attribute is liye use hoga jb hm koi action perform krna chahte hain.
- <input type='submit' value='Register User' />  -- yh aik input submit button hai isko hm use krienge to submit the form.
- form ke button ke press mein data send krta hai form yh action apply hota hai form pe.





