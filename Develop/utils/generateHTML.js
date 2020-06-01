function generateHtml(data) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>GitHub profile</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <!-- font awesome icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
    <!--Main define with .container class, container background white-->
    <main class="main">
        <!--Bootstrap navigation bar-->
        <nav>
            <h1> <strong> ${data.name} </strong></h1>
            <div class="links">
                <div class ="github">
                    <i class="fa fa-github " style="font-size:16px; float:left; line-height: 150% "></i>
                    <a href="${data.githubUrl}" style="float: left; margin: 0px; line-height: 150%; margin-left: 5px ">
                        ${data.user} 
                    </a>
                </div>
                <div class="blog">
                    <i class="fa fa-link" style="font-size:16px; float:left; line-height: 150% "></i>
                    <a href="${data.blog}" style="float: left; margin: 0px; line-height: 150%; margin-left: 5px ">
                        ${data.blog}
                    </a>
                </div>
            </div>
        </nav>
        <section>
            <picture>
                <img class="profile_image" src="${data.userPicture}" />
                <div class="location">
                    <div style="float: left; margin-left: 5px ">
                        <i class="fa fa-map-marker " style="font-size:16px; float: left; line-height: 150% "></i>
                        <p style="float: left; margin: 0px; line-height: 150%; margin-left: 5px ">
                            ${data.location}
                        </p>
                    </div>
                    <div style="float: left; margin-left: 5px ">
                        <i class="fa fa-envelope-o " style="font-size:16px; float: left; line-height: 150% "></i>
                        <p style="float: left; margin: 0px; line-height: 150%; margin-left: 5px ">
                            ${data.email}
                        </p>
                    </div>
                </div>
            </picture>
            <div class="right">
                <!--Introducing myself-->
                <h3>Bio</h3>
                <p>  ${data.bio}</p>
                <h3>Pinned repositories : ${data.count}</h3>
                ${data.reposHtml}
             </div>
        </section>
         <div class="footer">
                <div class="stats">
                    <h6 class="stat">Public repositories: ${data.repos} </h6>
                    <h6 class="stat">|</h6>
                    <h6 class="stat">Followers: ${data.followers}</h6>
                </div>
            </div>
    </main>

    
    <style>
        * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }
        
        body {
            height: 100%;
            font-family: Georgia, "Times New Roman", Times, serif;
        }
        /* Header - nigation bar attributes  */
        
        nav {
            padding: 0px;
            margin: 0px;
            height: 60px;
            width: 100%;
        }
        /* h1 heading (mame) attributes*/
        
        h1 {
            width: 250px;
            height: 56PX;
            line-height: 100%;
            float: left;
            background: ${data.color};
            font-size: 24px;
            color: white;
            padding: 20px;
        }
        
        .links {
            height: 57px;
            background-color: white;
            border-bottom: 1px solid ${data.color};
        }
        
        .blog,
        .github {
            padding: 10px;
            float: right;
            margin-left: 25px;
        }
        
        section {
            overflow: auto;
            width: 100%;
            flex-wrap: wrap;
        }

        .right>p {
            font-size: 16px;
            line-height: 1.5;
            padding-left: 5px;
            margin-bottom: 8px;
        }
    
        
        main {
            width: 90%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 50px;
            background-image: url("Images/background.jpg");
            border: 1px solid ${data.color};
            flex-wrap: wrap;
            position:relative;
        }
        
       
        h2 {
            width: auto;
            font-size: 24px;
            color: rgb(33, 119, 99);
            border-bottom: rgb(173, 171, 171);
            border-bottom-style: solid;
            padding-bottom: 15px;
            margin-left: 5px;
            margin-right: 5px;
        }
        
        h3 {
            width: auto;
            font-size: 18px;
            margin: auto;
            margin-top: 0px;
            margin-bottom: 8px;
            background-color: rgb(248, 248, 118);
            border-bottom: 2px solid ${data.color};
            padding-left: 5px;
        }
        
        picture {
            width: 250px;
            float: left;
            margin: 0 0px 5px 0;
            border: 1px solid rgb(173, 171, 171);
            padding: 5px;
            background-color: white;
            height: 100%;
        }
        
        .profile_image {
            display: block;
            margin: 10px auto 10px auto;
            width: 90%;
            height: auto;
            border-radius: 50%;
        }

        .right{
            padding-left:250px;
        }
        
        .repos {
            margin: 5px 5px 0 30px;
            padding: 0px;
            width: 275px;
            height: 90px;
            float:left;
        }
        
        .repos p {
            margin: 0px;
            padding: 0px;
            line-height: 1.3;
        }
    
        .location {
            padding: 8px;
            margin-top: 10px;
            background-color: rgb(248, 248, 118);
            border-radius: 8px;
            overflow: auto;
        }
        
        .footer {
            width:100%;
            background-color: ${data.color};
            height: 40px;
            color: white;
            border-top: rgb(248, 248, 118);
            border-top-style: solid;
            border-width: 4px;
            padding-left: 250px;
            position: absolute;
        }
        
        .stats {
            width: 380px;
            margin: auto;
            height: 100%;
        }
        
        .stat {
            float: left;
            line-height: 100%;
            padding: 10px;
        }
    </style>


</body>

</html>

`

}
module.exports = generateHtml;