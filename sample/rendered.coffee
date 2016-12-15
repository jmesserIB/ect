ect = require "ect"
fs = require "fs"

renderer = ect(root: "/views")
template = fs.readFileSync "/views/projects.html.ect", "utf-8"

projects = [

                name: "Mobile app"
                url: "/projects/1"
                description: "Iteration"
        ,
                name: "Home page redesign"
                url: "/projects/2"
]

projects1 = [{name: "Webserver", url: "/projects/3", description: "First Step"},{name: "reboot", url: "/projects/4"}]

#console.log projectList
#console.log projectList.length

console.log renderer.render 'projects.html.ect', projects1: projects.concat(projects1)
