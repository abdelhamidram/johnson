function johnsonsAlgorithm(jobs: number[][]) {
    const n = jobs.length;
    let g1: { job: number; time: number }[] = [],
        g2: { job: number; time: number }[] = [];
    for (let i = 0; i < n; i++) {
        if (jobs[i][0] < jobs[i][1]) {
            g1.push({ job: i, time: jobs[i][0] });
        } else {
            g2.push({ job: i, time: jobs[i][1] });
        }
    }
    g1.sort((a, b) => a.time - b.time);
    g2.sort((a, b) => b.time - a.time);
    const sequence: { job: number; time: number }[] = [...g1, ...g2];
    const totalTime = sequence.reduce((total, job) => total + job.time, 0);
    return { sequence, totalTime };
}
const jobs = [
    [5, 6],
    [15, 5],
    [8, 15],
    [20, 7],
    [3, 20],
];
const { sequence, totalTime } = johnsonsAlgorithm(jobs);
console.log('Optimal Schedule:');
sequence.forEach(({ job, time }) => {
    console.log(`{ job: ${job}, time: ${time} },`);
});