LogsIB = Logs In Big
====================

Is just a fun console tool to make bigger text in console 
or whatever place you want to print.

Then plan is just import the package an use his log function 
and let the magic begin :smile:.

  ```javascript

    const { log } = require('logsib')

    let str = 'Logs In Big :)'

    log(str, k => console.log(k))

  ```

Log function require 2 params, str as the string to transform
and the callback function to do whatever you want.
We have a third parameter that tell the max size of characters in screen,
by default the value is set as 20 but you can play with this.

If you wish to make this package better in any way just send a PR :thumbsup:
