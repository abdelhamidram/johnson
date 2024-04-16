var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function johnsonsAlgorithm(jobs) {
    var n = jobs.length;
    var g1 = [], g2 = [];
    for (var i = 0; i < n; i++) {
        if (jobs[i][0] < jobs[i][1]) {
            g1.push({ job: i, time: jobs[i][0] });
        }
        else {
            g2.push({ job: i, time: jobs[i][1] });
        }
    }
    g1.sort(function (a, b) { return a.time - b.time; });
    g2.sort(function (a, b) { return b.time - a.time; });
    var sequence = __spreadArray(__spreadArray([], g1, true), g2, true);
    var totalTime = sequence.reduce(function (total, job) { return total + job.time; }, 0);
    return { sequence: sequence, totalTime: totalTime };
}
var jobs = [
    [5, 6],
    [15, 5],
    [8, 15],
    [20, 7],
    [3, 20],
];
var _a = johnsonsAlgorithm(jobs), sequence = _a.sequence, totalTime = _a.totalTime;
console.log('Optimal Schedule:');
sequence.forEach(function (_a) {
    var job = _a.job, time = _a.time;
    console.log("{ job: ".concat(job, ", time: ").concat(time, " },"));
});
