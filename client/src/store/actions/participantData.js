export const STORE_PRIOR = 'STORE_PRIOR' ;
export const STORE_POSTERIOR = 'STORE_POSTERIOR';

const w = window;

export const storePrior = priorData => {
    const meanRaw = priorData.mean;
    const mean = priorData.mean / 100;
    const varRaw = priorData.var;
    const variance = w.log_slider(w.transform_con_slider_pos(priorData.var));
    const [a, b] = w.est_beta_par(mean, variance);

    return { type: STORE_PRIOR, priorData: {mean: mean, meanRaw: meanRaw, varRaw: varRaw, var: variance, a: a, b: b}, conditionNumber: priorData.conditionNumber};
};

export const storePosterior = posteriorData => {
    const meanRaw = posteriorData.mean;
    const mean = posteriorData.mean / 100;
    const varRaw = posteriorData.var;
    const variance = w.log_slider(w.transform_con_slider_pos(posteriorData.var));
    const [a, b] = w.est_beta_par(mean, variance);

    return { type: STORE_POSTERIOR, posteriorData: {mean: mean, meanRaw: meanRaw, varRaw: varRaw, var: variance, a: a, b: b}, conditionNumber: posteriorData.conditionNumber};
};