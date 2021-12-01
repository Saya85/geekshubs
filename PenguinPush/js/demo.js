 var agkStatus = document.getElementById("agkstatus");
      if ( agkStatus )
      {
        agkStatus.textContent = "Loading...";
      }

      var Module = {
        preRun: [],
        postRun: [],
        print: function(text) {},
        printErr: function(text) {},
        canvas: (function() {
          var canvas = document.getElementById('canvas');

          canvas.addEventListener("webglcontextlost", function(e) { alert('WebGL context lost. You will need to reload the page.'); e.preventDefault(); }, false);

          return canvas;
        })(),
        setStatus: function(text) {},
        totalDependencies: 0,
        monitorRunDependencies: function(left) {}
      };
      window.onerror = function(text) {
        // TODO: do not warn on ok events like simulating an infinite loop or exitStatus
        var agkStatus = document.getElementById("agkstatus");
        if ( agkStatus )
        {
          agkStatus.style.color = "Red";
          agkStatus.textContent = text;
        }
        //alert(text);
      };

     var script = document.createElement('script');
    script.src = "AGKPlayer.asm.js";
    script.onload = function() {
      setTimeout(function() {
        
          (function() {
            var memoryInitializer = 'AGKPlayer.html.mem';
            if (typeof Module['locateFile'] === 'function') {
              memoryInitializer = Module['locateFile'](memoryInitializer);
            } else if (Module['memoryInitializerPrefixURL']) {
              memoryInitializer = Module['memoryInitializerPrefixURL'] + memoryInitializer;
            }
            var xhr = Module['memoryInitializerRequest'] = new XMLHttpRequest();
            xhr.open('GET', memoryInitializer, true);
            xhr.responseType = 'arraybuffer';
            xhr.send(null);
          })();

          var script = document.createElement('script');
          script.src = "AGKPlayer.js";
          document.body.appendChild(script);

      }, 1); // delaying even 1ms is enough to allow compilation memory to be reclaimed
    };
    document.body.appendChild(script);
