### Technoverse Hackathon 

<h1>Project title: Legal Help</h1>

<p>Project Track : Web development</p>
<p> Tech stack used: 
<li>NextJs</li>
<li>TailwindCss</li>
<li>NextAuth</li>
</p>

</hr>
<h1>Setting up the project</h1>
<p> 1.clone the repo </p>
<p> 2.Enter into the dir
``` cd LEGAL-HELP    ```
</p>
<p> 3. Download dependencies   ``` npm i```</p>
<p> 4. Since the Legal help uses discord authentication , as creating client id for discord signin would be time consuming I will include my env here. Do not misuse it</p>
<p>5. In the .env file paste this 
===

NEXTAUTH_SECRET="/GKoTyKlaBDaVPFSRgJRdR1YGvuVVg2lPb4N5fNZAjo="
NEXTAUTH_URL="http://localhost:3000"

# Next Auth Discord Provider
DISCORD_CLIENT_ID="1122054749378859028"
DISCORD_CLIENT_SECRET="L80XnnRuzk2RZjcc14cj_5g2JNUtE6DD"

===

</p>
<p>5. Run ```npm run dev``` </p>
<p>6. The Application will be running in http://localhost:3000</p>



</hr>
<h1>The working of website</h1>
<p>1. On Entering the website You will land on the homepage where the services provided by legal help will be listed out</p>
<p>2. Only after Signin you will be able to book tickets for the services</p>
<p>3. Once the tickets have been booked ,you can access the mytickets tab through the navigation bar</p> 
<p>4. Over here all your tickets will be displayed</p>
<p>5. You have the ability to book two or more of the same service and this services will have unique id so you wont get confused</p>
<p>6. The ticket booked intially will be in Incomplete state, on clicking the ticket a new box appears where you can enter your number and then be contacted by the lawyer</p>
<p>7. After you have contacted the lawyer the state of the ticket will turn into compeleted and you can rate and give feedback on the service</p>

