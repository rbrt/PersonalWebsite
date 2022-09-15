import * as THREE from 'three';

export default class ThreeWrapper{
    constructor(canvasRef) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.Camera();
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef,
            antialias: false,
        });

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );

        const light = new THREE.AmbientLight( 0x404040 ); // soft white light
        this.scene.add( light );
        const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        this.scene.add( directionalLight );

        this.update();
        this.rotation = 0;

        this.cube.rotateX(Math.PI / 2 * 0.2)
    }

    // ******************* PUBLIC EVENTS ******************* //
    updateValue(value) {
      // Whatever you need to do with React props
    }

    onMouseMove() {
      // Mouse moves
    }

    onWindowResize(vpW, vpH) {
        this.renderer.setSize(vpW, vpH);
    }

    // ******************* RENDER LOOP ******************* //
    update(t) {

        //this.rotation = this.rotation + 1;
        this.cube.rotateY(Math.PI / 2 * 0.01);
        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(this.update.bind(this));
    }
}