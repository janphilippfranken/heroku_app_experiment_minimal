const loadBeliefSlider = cb => {
    const existingScritp = document.getElementById('insBeliefSliderScript');

    if (!existingScritp) {
        const script = document.createElement('script');
        script.src = './utils/Scripts/InsBeliefSliderScript.js';
        

script.id = 'insBeliefSliderScript';
document.body.appendChild(script);

script.onload = () => {
    if (cb) cb();
};
    }

if (existingScritp && cb) cb();
};

export default loadBeliefSlider