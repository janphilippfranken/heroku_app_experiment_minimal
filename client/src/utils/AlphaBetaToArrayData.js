export default (alpha, beta) => {

    const w = window;
    var mean = w.jStat.beta.mean(alpha, beta);
    var variance = w.jStat.beta.variance(alpha, beta);

    var con_slid_val = w.inverse_log_slider(variance);
    var con_slid_pos = w.transform_con_slider_val(con_slid_val);

    var x = w.create_arrays(0.01, .99, 1000, alpha, beta)[0];
    var y = w.create_arrays(0.01, .99, 1000, alpha, beta)[1];
    return { mean: mean, var: con_slid_pos, x: x, y: y };
};