$(function() {
  
  var canvas = document.getElementById('canvasID');
  
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 20, canvas.offsetWidth/canvas.offsetHeight, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });

  var geometry = new THREE.BoxGeometry(1,1,1);
  
  var material = new THREE.MeshBasicMaterial( { 
    map: THREE.ImageUtils.loadTexture('images/cube.png') 
  });
  
  var cube = new THREE.Mesh( geometry, material );

  var green1 = [new THREE.Vector2(0, 0.666), 
                new THREE.Vector2(0.5, 0.666), 
                new THREE.Vector2(0.5, 1), 
                new THREE.Vector2(0, 1)];
                
  var green2 = [new THREE.Vector2(0.5, 0.666), 
                new THREE.Vector2(1, 0.666), 
                new THREE.Vector2(1, 1), 
                new THREE.Vector2(0.5, 1)];
                
  var orange1 = [new THREE.Vector2(0, 0.333), 
                new THREE.Vector2(0.5, 0.333), 
                new THREE.Vector2(0.5, 0.666), 
                new THREE.Vector2(0, 0.666)];
    
  var orange2 = [new THREE.Vector2(0.5, 0.333), 
                new THREE.Vector2(1, 0.333), 
                new THREE.Vector2(1, 0.666), 
                new THREE.Vector2(0.5, 0.666)];
    
  var blue1 = [new THREE.Vector2(0, 0), 
              new THREE.Vector2(0.5, 0), 
              new THREE.Vector2(0.5, 0.333), 
              new THREE.Vector2(0, 0.333)];
    
  var blue2 = [new THREE.Vector2(0.5, 0), 
              new THREE.Vector2(1, 0), 
              new THREE.Vector2(1, 0.333), 
              new THREE.Vector2(0.5, 0.333)];
  
  renderer.setSize( canvas.offsetWidth, canvas.offsetHeight );
  renderer.setClearColor( 0xffffff, 1 );
  
  geometry.faceVertexUvs[0] = [];

  geometry.faceVertexUvs[0][0] = [ green1[0], green1[1], green1[3] ];
  geometry.faceVertexUvs[0][1] = [ green1[1], green1[2], green1[3] ];
  geometry.faceVertexUvs[0][2] = [ green2[0], green2[1], green2[3] ];
  geometry.faceVertexUvs[0][3] = [ green2[1], green2[2], green2[3] ];

  geometry.faceVertexUvs[0][4] = [ orange1[0], orange1[1], orange1[3] ];
  geometry.faceVertexUvs[0][5] = [ orange1[1], orange1[2], orange1[3] ];
  geometry.faceVertexUvs[0][6] = [ orange2[0], orange2[1], orange2[3] ];
  geometry.faceVertexUvs[0][7] = [ orange2[1], orange2[2], orange2[3] ];

  geometry.faceVertexUvs[0][8] = [ blue1[0], blue1[1], blue1[3] ];
  geometry.faceVertexUvs[0][9] = [ blue1[1], blue1[2], blue1[3] ];
  geometry.faceVertexUvs[0][10] = [ blue2[0], blue2[1], blue2[3] ];
  geometry.faceVertexUvs[0][11] = [ blue2[1], blue2[2], blue2[3] ];

  scene.add(cube);

  camera.position.x = 0;
  camera.position.z = 5;

  function render() {
    requestAnimationFrame(render);

    cube.rotation.x += 0.025;
    cube.rotation.y += 0.025;

    renderer.render(scene, camera);
  }
  
  render();

});