# create-scss-selector
![image text](http://pp27i0i8c.bkt.clouddn.com/%E6%9C%AA%E5%91%BD%E5%90%8D.gif)


------

#Installing

    npm i create-scss-selector
    
    
#Example



    import createScss from 'create-scss-selector'
    
    <div class='hello'>
        <ul>
            <li></li>
        </ul>
    </div>
    
    let dom = document.querySelector('.hello')
    let a = new createScss(dom, true)
    a.createClassTree(dom)
    
    //see your console
