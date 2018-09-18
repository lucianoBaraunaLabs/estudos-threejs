const SCENE = new THREE.Scene(); // inicia a cena
const CAMERA = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 ); // dividindo a largura e altura
// dessa forma conseguimos manter toda a camera dentro da viewport

const RENDERER = new THREE.WebGLRenderer(); // adiciona o render que vai utilizar e caso não o browser não
// tenha suporte a WebGl ele faz um fallback
RENDERER.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( RENDERER.domElement );

const GEOMETRY = new THREE.BoxGeometry( 1, 1, 1 );
const MATERIAL = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
let cube = new THREE.Mesh( GEOMETRY, MATERIAL );
SCENE.add( cube );

CAMERA.position.z = 5;

function animate() { // Função que fica sendo executa a 60 fps
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  RENDERER.render(SCENE, CAMERA)
}

animate();

