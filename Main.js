Torus.rotation.y = -5.8
Torus.rotation.z = -5.6

///TALERZ///

const cylinder4geometry = new THREE.CylinderGeometry( 3.5, 2.3, 0.7, 100, );
const cylinder4material = new THREE.MeshStandardMaterial( {color: "rgb(20, 250, 10)"} );
const cylinder4 = new THREE.Mesh( cylinder4geometry, cylinder4material );
scene.add( cylinder4 );

cylinder4.position.x = 3.7
cylinder4.position.y = 0.27
cylinder4.position.z = 4.6

cylinder4.rotation.x = 5.255
cylinder4.rotation.y = 1.5
cylinder4.rotation.z = 0.79



////////////////////////////

circle.rotation.x = 4.9
circle.rotation.z = 2.7

//Redner & renderer
function render() {
renderer.render(scene, camera);
requestAnimationFrame(render)}
render();
