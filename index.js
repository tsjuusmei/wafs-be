const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/temps', (req, res) => {
    res.json(data)
})

const data = [
    {
        "temps": {
            "average": -65.45,
            "minimum": -99.64,
            "maximum": -23.16
        }
    },
    {
        "temps": {
            "average": -63.5,
            "minimum": -99.98,
            "maximum": -21.74
        }
    },
    {
        "temps": {
            "average": -65.18,
            "minimum": -101.03,
            "maximum": -20.79
        }
    },
    {
        "temps": {
            "average": -68.42,
            "minimum": -100.1,
            "maximum": -21.49
        }
    },
    {
        "temps": {
            "average": -61.24,
            "minimum": -99.32,
            "maximum": -21.75
        }
    },
    {
        "temps": {
            "average": -68.28,
            "minimum": -100.15,
            "maximum": -20.64
        }
    },
    {
        "temps": {
            "average": -66.67,
            "minimum": -98.16,
            "maximum": -21.21
        }
    },
    {
        "temps": {
            "average": -64.24,
            "minimum": -98.55,
            "maximum": -21.17
        }
    },
    {
        "temps": {
            "average": -66.41,
            "minimum": -99.8,
            "maximum": -21.07
        }
    },
    {
        "temps": {
            "average": -66.56,
            "minimum": -99.89,
            "maximum": -20.35
        }
    },
    {
        "temps": {
            "average": -66.85,
            "minimum": -98.8,
            "maximum": -21.53
        }
    },
    {
        "temps": {
            "average": -61.51,
            "minimum": -98.94,
            "maximum": -20.44
        }
    },
    {
        "temps": {
            "average": -71.11,
            "minimum": -139.94,
            "maximum": -20.91
        }
    },
    {
        "temps": {
            "average": -66.24,
            "minimum": -100.05,
            "maximum": -20.92
        }
    },
    {
        "temps": {
            "average": -67.6,
            "minimum": -98.23,
            "maximum": -21.16
        }
    },
    {
        "temps": {
            "average": -69.67,
            "minimum": -98.97,
            "maximum": -19.47
        }
    },
    {
        "temps": {
            "average": -65.17,
            "minimum": -96.62,
            "maximum": -19.79
        }
    },
    {
        "temps": {
            "average": -66.25,
            "minimum": -97.19,
            "maximum": -21.23
        }
    },
    {
        "temps": {
            "average": -71.61,
            "minimum": -98.11,
            "maximum": -20.06
        }
    },
    {
        "temps": {
            "average": -65.43,
            "minimum": -97.31,
            "maximum": -21.15
        }
    },
    {
        "temps": {
            "average": -69.91,
            "minimum": -97.54,
            "maximum": -19.76
        }
    },
    {
        "temps": {
            "average": -65.61,
            "minimum": -98.19,
            "maximum": -19.28
        }
    },
    {
        "temps": {
            "average": -59.32,
            "minimum": -97.53,
            "maximum": -19.93
        }
    },
    {
        "temps": {
            "average": -65.76,
            "minimum": -97.68,
            "maximum": -19.95
        }
    },
    {
        "temps": {
            "average": -67.81,
            "minimum": -96.33,
            "maximum": -19.97
        }
    },
    {
        "temps": {
            "average": -62.59,
            "minimum": -97.94,
            "maximum": -20.58
        }
    },
    {
        "temps": {
            "average": -61.91,
            "minimum": -98,
            "maximum": -19.52
        }
    },
    {
        "temps": {
            "average": -62.32,
            "minimum": -96.89,
            "maximum": -16.39
        }
    },
    {
        "temps": {
            "average": -67.55,
            "minimum": -98.08,
            "maximum": -18.47
        }
    },
    {
        "temps": {
            "average": -72.21,
            "minimum": -96.55,
            "maximum": -22.38
        }
    },
    {
        "temps": {
            "average": -60.03,
            "minimum": -96.36,
            "maximum": -18.64
        }
    },
    {
        "temps": {
            "average": -65.82,
            "minimum": -98.64,
            "maximum": -18.4
        }
    },
    {
        "temps": {
            "average": -65.87,
            "minimum": -98.86,
            "maximum": -17.28
        }
    },
    {
        "temps": {
            "average": -60.41,
            "minimum": -99.19,
            "maximum": -18.64
        }
    },
    {
        "temps": {
            "average": -65.84,
            "minimum": -100.19,
            "maximum": -17.85
        }
    },
    {
        "temps": {
            "average": -60.63,
            "minimum": -98.97,
            "maximum": -17.59
        }
    },
    {
        "temps": {
            "average": -66.03,
            "minimum": -98.2,
            "maximum": -17.73
        }
    },
    {
        "temps": {
            "average": -68.82,
            "minimum": -97.68,
            "maximum": -17.57
        }
    },
    {
        "temps": {
            "average": -63.32,
            "minimum": -98.96,
            "maximum": -17.67
        }
    },
    {
        "temps": {
            "average": -62.32,
            "minimum": -99.65,
            "maximum": -17.85
        }
    },
    {
        "temps": {
            "average": -70.81,
            "minimum": -100.13,
            "maximum": -18.18
        }
    },
    {
        "temps": {
            "average": -67.3,
            "minimum": -100.07,
            "maximum": -15.75
        }
    },
    {
        "temps": {
            "average": -68.71,
            "minimum": -100.63,
            "maximum": -16.79
        }
    },
    {
        "temps": {
            "average": -61.62,
            "minimum": -97.84,
            "maximum": -17.53
        }
    },
    {
        "temps": {
            "average": -66.61,
            "minimum": -99.14,
            "maximum": -15.67
        }
    },
    {
        "temps": {
            "average": -65.47,
            "minimum": -100.04,
            "maximum": -16.82
        }
    },
    {
        "temps": {
            "average": -62.45,
            "minimum": -101.27,
            "maximum": -16.93
        }
    },
    {
        "temps": {
            "average": -66.01,
            "minimum": -99.52,
            "maximum": -16.84
        }
    },
    {
        "temps": {
            "average": -64.14,
            "minimum": -102.5,
            "maximum": -16.83
        }
    },
    {
        "temps": {
            "average": -63.26,
            "minimum": -100.02,
            "maximum": -17.12
        }
    },
    {
        "temps": {
            "average": -64.51,
            "minimum": -99.51,
            "maximum": -16.45
        }
    },
    {
        "temps": {
            "average": -63.85,
            "minimum": -97.06,
            "maximum": -16.04
        }
    },
    {
        "temps": {
            "average": -62.88,
            "minimum": -98.64,
            "maximum": -15.38
        }
    },
    {
        "temps": {
            "average": -68.22,
            "minimum": -97.5,
            "maximum": -12.53
        }
    },
    {
        "temps": {
            "average": -63.39,
            "minimum": -96.36,
            "maximum": -16.7
        }
    },
    {
        "temps": {
            "average": -63.9,
            "minimum": -96.89,
            "maximum": -14.48
        }
    },
    {
        "temps": {
            "average": -62.18,
            "minimum": -96.49,
            "maximum": -15.96
        }
    },
    {
        "temps": {
            "average": -62.6,
            "minimum": -95.68,
            "maximum": -15.88
        }
    },
    {
        "temps": {
            "average": -63.98,
            "minimum": -95.06,
            "maximum": -14.3
        }
    },
    {
        "temps": {
            "average": -67.56,
            "minimum": -93.95,
            "maximum": -14.5
        }
    },
    {
        "temps": {
            "average": -61.23,
            "minimum": -94.05,
            "maximum": -15.35
        }
    },
    {
        "temps": {
            "average": -57.91,
            "minimum": -94.08,
            "maximum": -15.55
        }
    },
    {
        "temps": {
            "average": -61.24,
            "minimum": -96.1,
            "maximum": -12.49
        }
    },
    {
        "temps": {
            "average": -66.75,
            "minimum": -93.73,
            "maximum": -13.74
        }
    },
    {
        "temps": {
            "average": -56.53,
            "minimum": -93.09,
            "maximum": -13.77
        }
    },
    {
        "temps": {
            "average": -50.92,
            "minimum": -90.16,
            "maximum": -13.07
        }
    },
    {
        "temps": {
            "average": -64.19,
            "minimum": -92.19,
            "maximum": -9.67
        }
    },
    {
        "temps": {
            "average": -57.47,
            "minimum": -91.9,
            "maximum": -12.65
        }
    },
    {
        "temps": {
            "average": -59.61,
            "minimum": -90.63,
            "maximum": -11.1
        }
    },
    {
        "temps": {
            "average": -66.17,
            "minimum": -91.64,
            "maximum": -9.06
        }
    },
    {
        "temps": {
            "average": -60.65,
            "minimum": -91.68,
            "maximum": -9.76
        }
    },
    {
        "temps": {
            "average": -62.07,
            "minimum": -91.64,
            "maximum": -8.74
        }
    },
    {
        "temps": {
            "average": -59.42,
            "minimum": -94.79,
            "maximum": -10.4
        }
    },
    {
        "temps": {
            "average": -61.24,
            "minimum": -93.26,
            "maximum": -13.02
        }
    },
    {
        "temps": {
            "average": -60.41,
            "minimum": -93.87,
            "maximum": -11.87
        }
    },
    {
        "temps": {
            "average": -61.31,
            "minimum": -94.22,
            "maximum": -9.44
        }
    },
    {
        "temps": {
            "average": -61.1,
            "minimum": -94.17,
            "maximum": -8.88
        }
    },
    {
        "temps": {
            "average": -57.43,
            "minimum": -94.55,
            "maximum": -7.33
        }
    },
    {
        "temps": {
            "average": -59.53,
            "minimum": -93.82,
            "maximum": -10.16
        }
    },
    {
        "temps": {
            "average": -63.19,
            "minimum": -94.4,
            "maximum": -10.35
        }
    },
    {
        "temps": {
            "average": -61.75,
            "minimum": -94.73,
            "maximum": -9.93
        }
    },
    {
        "temps": {
            "average": -61.32,
            "minimum": -95.38,
            "maximum": -10.05
        }
    },
    {
        "temps": {
            "average": -59.25,
            "minimum": -94.65,
            "maximum": -9.32
        }
    },
    {
        "temps": {
            "average": -64.1,
            "minimum": -95.16,
            "maximum": -13.01
        }
    },
    {
        "temps": {
            "average": -62.07,
            "minimum": -95.08,
            "maximum": -13.51
        }
    },
    {
        "temps": {
            "average": -67.15,
            "minimum": -94.08,
            "maximum": -10.54
        }
    },
    {
        "temps": {
            "average": -61.32,
            "minimum": -94.77,
            "maximum": -12.32
        }
    },
    {
        "temps": {
            "average": -67.19,
            "minimum": -93.76,
            "maximum": -11.96
        }
    },
    {
        "temps": {
            "average": -64.97,
            "minimum": -92.76,
            "maximum": -12.85
        }
    },
    {
        "temps": {
            "average": -57.43,
            "minimum": -93.61,
            "maximum": -10.91
        }
    },
    {
        "temps": {
            "average": -59.7,
            "minimum": -92.55,
            "maximum": -11.13
        }
    },
    {
        "temps": {
            "average": -63.95,
            "minimum": -94.07,
            "maximum": -8.32
        }
    },
    {
        "temps": {
            "average": -57.23,
            "minimum": -93.58,
            "maximum": -11.27
        }
    },
    {
        "temps": {
            "average": -63.35,
            "minimum": -93.55,
            "maximum": -10.38
        }
    },
    {
        "temps": {
            "average": -62.17,
            "minimum": -93.56,
            "maximum": -10.33
        }
    },
    {
        "temps": {
            "average": -58.66,
            "minimum": -94.25,
            "maximum": -9.2
        }
    },
    {
        "temps": {
            "average": -59.78,
            "minimum": -95.07,
            "maximum": -10.77
        }
    },
    {
        "temps": {
            "average": -61.74,
            "minimum": -95.91,
            "maximum": -12.52
        }
    },
    {
        "temps": {
            "average": -63.99,
            "minimum": -95.44,
            "maximum": -12.8
        }
    },
    {
        "temps": {
            "average": -61.45,
            "minimum": -94.59,
            "maximum": -9.6
        }
    },
    {
        "temps": {
            "average": -59.12,
            "minimum": -95.71,
            "maximum": -9.11
        }
    },
    {
        "temps": {
            "average": -66.6,
            "minimum": -95.57,
            "maximum": -7.72
        }
    },
    {
        "temps": {
            "average": -58.44,
            "minimum": -94.88,
            "maximum": -7.1
        }
    },
    {
        "temps": {
            "average": -52.9,
            "minimum": -94.16,
            "maximum": -7.78
        }
    },
    {
        "temps": {
            "average": -60.79,
            "minimum": -94.07,
            "maximum": -8.43
        }
    },
    {
        "temps": {
            "average": -65.65,
            "minimum": -93.99,
            "maximum": -7.29
        }
    },
    {
        "temps": {
            "average": -77.33,
            "minimum": -94.59,
            "maximum": -7.65
        }
    },
    {
        "temps": {
            "average": -57.24,
            "minimum": -92.65,
            "maximum": -7.24
        }
    },
    {
        "temps": {
            "average": -59.42,
            "minimum": -93,
            "maximum": -6.47
        }
    },
    {
        "temps": {
            "average": -59.64,
            "minimum": -93.27,
            "maximum": -8.48
        }
    },
    {
        "temps": {
            "average": -66.03,
            "minimum": -93.75,
            "maximum": -7.98
        }
    },
    {
        "temps": {
            "average": -65.41,
            "minimum": -93.05,
            "maximum": -6.75
        }
    },
    {
        "temps": {
            "average": -59.8,
            "minimum": -93.89,
            "maximum": -5.91
        }
    },
    {
        "temps": {
            "average": -62.29,
            "minimum": -93.11,
            "maximum": -6.0600000000000005
        }
    },
    {
        "temps": {
            "average": -59.79,
            "minimum": -94.83,
            "maximum": -8.42
        }
    },
    {
        "temps": {
            "average": -58.4,
            "minimum": -94.32,
            "maximum": -7.04
        }
    },
    {
        "temps": {
            "average": -59.37,
            "minimum": -93.41,
            "maximum": -6.99
        }
    },
    {
        "temps": {
            "average": -65.27,
            "minimum": -94.7,
            "maximum": -5.35
        }
    },
    {
        "temps": {
            "average": -58.29,
            "minimum": -93.5,
            "maximum": -6.64
        }
    },
    {
        "temps": {
            "average": -70.83,
            "minimum": -93.78,
            "maximum": -19.69
        }
    },
    {
        "temps": {
            "average": -54.57,
            "minimum": -93.45,
            "maximum": -6.51
        }
    },
    {
        "temps": {
            "average": -60.6,
            "minimum": -94.3,
            "maximum": -4.88
        }
    },
    {
        "temps": {
            "average": -59.09,
            "minimum": -93.18,
            "maximum": -3.6
        }
    },
    {
        "temps": {
            "average": -59.36,
            "minimum": -94.39,
            "maximum": -5.46
        }
    },
    {
        "temps": {
            "average": -59.63,
            "minimum": -94.84,
            "maximum": -5.33
        }
    },
    {
        "temps": {
            "average": -59.39,
            "minimum": -95.43,
            "maximum": -3.73
        }
    },
    {
        "temps": {
            "average": -59.12,
            "minimum": -93.98,
            "maximum": -4.24
        }
    },
    {
        "temps": {
            "average": -61.68,
            "minimum": -94.65,
            "maximum": -6.16
        }
    },
    {
        "temps": {
            "average": -59.16,
            "minimum": -94.33,
            "maximum": -4.07
        }
    },
    {
        "temps": {
            "average": -58.91,
            "minimum": -94.28,
            "maximum": -5.65
        }
    },
    {
        "temps": {
            "average": -60.36,
            "minimum": -94.41,
            "maximum": -3.6
        }
    },
    {
        "temps": {
            "average": -58.87,
            "minimum": -93.8,
            "maximum": -3.5300000000000002
        }
    },
    {
        "temps": {
            "average": -61.16,
            "minimum": -93.47,
            "maximum": -4.27
        }
    },
    {
        "temps": {
            "average": -58.31,
            "minimum": -94.04,
            "maximum": -4.88
        }
    },
    {
        "temps": {
            "average": -57.24,
            "minimum": -93.79,
            "maximum": -4.86
        }
    },
    {
        "temps": {
            "average": -64.12,
            "minimum": -93.61,
            "maximum": -6.66
        }
    },
    {
        "temps": {
            "average": -65.15,
            "minimum": -93.77,
            "maximum": -6.6
        }
    },
    {
        "temps": {
            "average": -58.11,
            "minimum": -93.46,
            "maximum": -3.7
        }
    },
    {
        "temps": {
            "average": -55.26,
            "minimum": -92.06,
            "maximum": -2.39
        }
    },
    {
        "temps": {
            "average": -57.86,
            "minimum": -92.24,
            "maximum": -2.41
        }
    },
    {
        "temps": {
            "average": -57.72,
            "minimum": -93.17,
            "maximum": -2.19
        }
    },
    {
        "temps": {
            "average": -57.6,
            "minimum": -93.04,
            "maximum": -1.54
        }
    },
    {
        "temps": {
            "average": -57.79,
            "minimum": -93.21,
            "maximum": -3.64
        }
    },
    {
        "temps": {
            "average": -56.44,
            "minimum": -92.87,
            "maximum": -3.13
        }
    },
    {
        "temps": {
            "average": -56.11,
            "minimum": -92.97,
            "maximum": -0.12
        }
    },
    {
        "temps": {
            "average": -51.73,
            "minimum": -92.3,
            "maximum": -2.78
        }
    },
    {
        "temps": {
            "average": -58.03,
            "minimum": -93.76,
            "maximum": -4.39
        }
    },
    {
        "temps": {
            "average": -54.83,
            "minimum": -93.17,
            "maximum": 1.4
        }
    },
    {
        "temps": {
            "average": -56.36,
            "minimum": -92.61,
            "maximum": 1.21
        }
    },
    {
        "temps": {
            "average": -55.14,
            "minimum": -93.29,
            "maximum": -0.9
        }
    },
    {
        "temps": {
            "average": -62.66,
            "minimum": -92.34,
            "maximum": -0.31999999999999995
        }
    },
    {
        "temps": {
            "average": -56.32,
            "minimum": -92.85,
            "maximum": -1.4300000000000002
        }
    },
    {
        "temps": {
            "average": -64.77,
            "minimum": -93.16,
            "maximum": -1.13
        }
    },
    {
        "temps": {
            "average": -56.63,
            "minimum": -93.17,
            "maximum": -1.69
        }
    },
    {
        "temps": {
            "average": -57.37,
            "minimum": -93.17,
            "maximum": -2.21
        }
    },
    {
        "temps": {
            "average": -54.7,
            "minimum": -92.47,
            "maximum": 0.5
        }
    },
    {
        "temps": {
            "average": -57.24,
            "minimum": -93.62,
            "maximum": -0.39
        }
    },
    {
        "temps": {
            "average": -56.45,
            "minimum": -94.01,
            "maximum": -1.78
        }
    },
    {
        "temps": {
            "average": -55.87,
            "minimum": -93.04,
            "maximum": 0.76
        }
    },
    {
        "temps": {
            "average": -54.97,
            "minimum": -93.47,
            "maximum": -5.3100000000000005
        }
    },
    {
        "temps": {
            "average": -57.04,
            "minimum": -93.2,
            "maximum": 0.62
        }
    },
    {
        "temps": {
            "average": -64.66,
            "minimum": -92.59,
            "maximum": 0.41
        }
    },
    {
        "temps": {
            "average": -57.29,
            "minimum": -93.47,
            "maximum": -6.09
        }
    },
    {
        "temps": {
            "average": -54.59,
            "minimum": -93.14,
            "maximum": -1.1400000000000001
        }
    },
    {
        "temps": {
            "average": -56.5,
            "minimum": -92.82,
            "maximum": -6.71
        }
    },
    {
        "temps": {
            "average": -57.35,
            "minimum": -92.82,
            "maximum": 0.94
        }
    },
    {
        "temps": {
            "average": -54.05,
            "minimum": -91.33,
            "maximum": -2.66
        }
    },
    {
        "temps": {
            "average": -62.87,
            "minimum": -91.53,
            "maximum": -7.25
        }
    },
    {
        "temps": {
            "average": -54.64,
            "minimum": -92.67,
            "maximum": -0.78
        }
    },
    {
        "temps": {
            "average": -56.97,
            "minimum": -91.95,
            "maximum": -3.5
        }
    },
    {
        "temps": {
            "average": -53.95,
            "minimum": -92.54,
            "maximum": -4.48
        }
    },
    {
        "temps": {
            "average": -55.53,
            "minimum": -92.23,
            "maximum": 1.63
        }
    },
    {
        "temps": {
            "average": -55.8,
            "minimum": -91.76,
            "maximum": -1.56
        }
    },
    {
        "temps": {
            "average": -62.72,
            "minimum": -92.24,
            "maximum": 0.02
        }
    },
    {
        "temps": {
            "average": -53.02,
            "minimum": -92.93,
            "maximum": -6.56
        }
    },
    {
        "temps": {
            "average": -66.94,
            "minimum": -92.02,
            "maximum": -6.0600000000000005
        }
    },
    {
        "temps": {
            "average": -58.33,
            "minimum": -92.5,
            "maximum": -4.92
        }
    },
    {
        "temps": {
            "average": -64.86,
            "minimum": -92.7,
            "maximum": -6.64
        }
    },
    {
        "temps": {
            "average": -58.24,
            "minimum": -92.18,
            "maximum": -1.04
        }
    },
    {
        "temps": {
            "average": -57.58,
            "minimum": -91.19,
            "maximum": -2.81
        }
    },
    {
        "temps": {
            "average": -61.89,
            "minimum": -91.85,
            "maximum": -1.53
        }
    },
    {
        "temps": {
            "average": -59.07,
            "minimum": -92.06,
            "maximum": 0.93
        }
    },
    {
        "temps": {
            "average": -58.02,
            "minimum": -92.3,
            "maximum": -1.27
        }
    },
    {
        "temps": {
            "average": -56.1,
            "minimum": -91.21,
            "maximum": -1.91
        }
    },
    {
        "temps": {
            "average": -56.21,
            "minimum": -91.21,
            "maximum": 0.04
        }
    },
    {
        "temps": {
            "average": -56.99,
            "minimum": -92.4,
            "maximum": -3.97
        }
    },
    {
        "temps": {
            "average": -55.29,
            "minimum": -90.99,
            "maximum": -3.5300000000000002
        }
    },
    {
        "temps": {
            "average": -58.85,
            "minimum": -90.8,
            "maximum": -6.46
        }
    },
    {
        "temps": {
            "average": -61.99,
            "minimum": -92.08,
            "maximum": -0.97
        }
    },
    {
        "temps": {
            "average": -58.76,
            "minimum": -91,
            "maximum": -4.87
        }
    },
    {
        "temps": {
            "average": -57.92,
            "minimum": -90.67,
            "maximum": -2.77
        }
    },
    {
        "temps": {
            "average": -59.54,
            "minimum": -91.4,
            "maximum": -11.49
        }
    },
    {
        "temps": {
            "average": -56.21,
            "minimum": -89.75,
            "maximum": -2.88
        }
    },
    {
        "temps": {
            "average": -59.3,
            "minimum": -89.54,
            "maximum": -13.26
        }
    },
    {
        "temps": {
            "average": -53.63,
            "minimum": -89.51,
            "maximum": -3.88
        }
    },
    {
        "temps": {
            "average": -56.39,
            "minimum": -89.34,
            "maximum": -4.32
        }
    },
    {
        "temps": {
            "average": -56.44,
            "minimum": -89.6,
            "maximum": -5.04
        }
    },
    {
        "temps": {
            "average": -57.07,
            "minimum": -88.39,
            "maximum": -4.21
        }
    },
    {
        "temps": {
            "average": -60.12,
            "minimum": -88.25,
            "maximum": -5.18
        }
    },
    {
        "temps": {
            "average": -63.32,
            "minimum": -88.54,
            "maximum": -3.69
        }
    },
    {
        "temps": {
            "average": -59.56,
            "minimum": -88.8,
            "maximum": -8.44
        }
    },
    {
        "temps": {
            "average": -56.64,
            "minimum": -88.71,
            "maximum": -10.11
        }
    },
    {
        "temps": {
            "average": -59.08,
            "minimum": -89.09,
            "maximum": -4.58
        }
    },
    {
        "temps": {
            "average": -62.96,
            "minimum": -89.04,
            "maximum": -7.24
        }
    },
    {
        "temps": {
            "average": -57.45,
            "minimum": -89.09,
            "maximum": -12.28
        }
    },
    {
        "temps": {
            "average": -54.87,
            "minimum": -89.18,
            "maximum": -12.03
        }
    },
    {
        "temps": {
            "average": -59.49,
            "minimum": -131.75,
            "maximum": -7.09
        }
    },
    {
        "temps": {
            "average": -60.36,
            "minimum": -89.16,
            "maximum": -9.85
        }
    },
    {
        "temps": {
            "average": -59.83,
            "minimum": -89.21,
            "maximum": -10.98
        }
    },
    {
        "temps": {
            "average": -57.76,
            "minimum": -90.14,
            "maximum": -13.11
        }
    },
    {
        "temps": {
            "average": -59.52,
            "minimum": -89.95,
            "maximum": -13.78
        }
    },
    {
        "temps": {
            "average": -60.34,
            "minimum": -91.21,
            "maximum": -15.46
        }
    },
    {
        "temps": {
            "average": -62.04,
            "minimum": -92.02,
            "maximum": -15.09
        }
    },
    {
        "temps": {
            "average": -61,
            "minimum": -91.8,
            "maximum": -15.97
        }
    },
    {
        "temps": {
            "average": -59.47,
            "minimum": -91.77,
            "maximum": -16.57
        }
    },
    {
        "temps": {
            "average": -66.3,
            "minimum": -91.92,
            "maximum": -12.93
        }
    },
    {
        "temps": {
            "average": -65.13,
            "minimum": -90.74,
            "maximum": -15.41
        }
    },
    {
        "temps": {
            "average": -61.89,
            "minimum": -91.02,
            "maximum": -16.87
        }
    },
    {
        "temps": {
            "average": -61.02,
            "minimum": -91.61,
            "maximum": -15.1
        }
    },
    {
        "temps": {
            "average": -75.92,
            "minimum": -91.76,
            "maximum": -42.64
        }
    },
    {
        "temps": {
            "average": -55.01,
            "minimum": -107.62,
            "maximum": -5.75
        }
    },
    {
        "temps": {
            "average": -57.93,
            "minimum": -91.6,
            "maximum": -10.64
        }
    },
    {
        "temps": {
            "average": -58.28,
            "minimum": -91.46,
            "maximum": -9.5
        }
    },
    {
        "temps": {
            "average": -70.89,
            "minimum": -114.03,
            "maximum": -42.45
        }
    },
    {
        "temps": {
            "average": -57.85,
            "minimum": -91.53,
            "maximum": -16.31
        }
    },
    {
        "temps": {
            "average": -65.65,
            "minimum": -92.69,
            "maximum": -18.38
        }
    },
    {
        "temps": {
            "average": -61.72,
            "minimum": -94.12,
            "maximum": -18.67
        }
    },
    {
        "temps": {
            "average": -64.31,
            "minimum": -93.11,
            "maximum": -18.92
        }
    },
    {
        "temps": {
            "average": -62.49,
            "minimum": -93.03,
            "maximum": -19.51
        }
    },
    {
        "temps": {
            "average": -62.19,
            "minimum": -93.42,
            "maximum": -18.18
        }
    },
    {
        "temps": {
            "average": -62.44,
            "minimum": -93.77,
            "maximum": -16.85
        }
    },
    {
        "temps": {
            "average": -61.29,
            "minimum": -93.85,
            "maximum": -15.89
        }
    },
    {
        "temps": {
            "average": -61.08,
            "minimum": -94.58,
            "maximum": -16.14
        }
    },
    {
        "temps": {
            "average": -62.31,
            "minimum": -95.17,
            "maximum": -16.45
        }
    },
    {
        "temps": {
            "average": -61.52,
            "minimum": -94.58,
            "maximum": -17.11
        }
    },
    {
        "temps": {
            "average": -61.02,
            "minimum": -95.62,
            "maximum": -10.38
        }
    },
    {
        "temps": {
            "average": -68.53,
            "minimum": -94.83,
            "maximum": -7.38
        }
    },
    {
        "temps": {
            "average": -62.18,
            "minimum": -95.41,
            "maximum": -12.61
        }
    },
    {
        "temps": {
            "average": -62.25,
            "minimum": -94.7,
            "maximum": -15.57
        }
    },
    {
        "temps": {
            "average": -61.95,
            "minimum": -95.65,
            "maximum": -14.99
        }
    },
    {
        "temps": {
            "average": -68.95,
            "minimum": -96.05,
            "maximum": -14.31
        }
    },
    {
        "temps": {
            "average": -67.41,
            "minimum": -95.56,
            "maximum": -15.16
        }
    },
    {
        "temps": {
            "average": -55.52,
            "minimum": -96.03,
            "maximum": -15.64
        }
    },
    {
        "temps": {
            "average": -56.3,
            "minimum": -96.11,
            "maximum": -14.93
        }
    },
    {
        "temps": {
            "average": -59.43,
            "minimum": -97.07,
            "maximum": -16.88
        }
    },
    {
        "temps": {
            "average": -63.11,
            "minimum": -95.71,
            "maximum": -19.18
        }
    },
    {
        "temps": {
            "average": -62.33,
            "minimum": -95.9,
            "maximum": -17.48
        }
    },
    {
        "temps": {
            "average": -61.96,
            "minimum": -96.73,
            "maximum": -15.88
        }
    },
    {
        "temps": {
            "average": -63.4,
            "minimum": -96.11,
            "maximum": -15.56
        }
    },
    {
        "temps": {
            "average": -68.3,
            "minimum": -96.3,
            "maximum": -10.57
        }
    },
    {
        "temps": {
            "average": -62.94,
            "minimum": -95.81,
            "maximum": -15.55
        }
    },
    {
        "temps": {
            "average": -63.46,
            "minimum": -95.27,
            "maximum": -17.96
        }
    },
    {
        "temps": {
            "average": -63.95,
            "minimum": -97.29,
            "maximum": -19.64
        }
    },
    {
        "temps": {
            "average": -63.29,
            "minimum": -97.19,
            "maximum": -17.97
        }
    },
    {
        "temps": {
            "average": -64.22,
            "minimum": -96.64,
            "maximum": -14.59
        }
    },
    {
        "temps": {
            "average": -62.83,
            "minimum": -96.48,
            "maximum": -10.81
        }
    },
    {
        "temps": {
            "average": -63.16,
            "minimum": -95.97,
            "maximum": -10.67
        }
    },
    {
        "temps": {
            "average": -62.12,
            "minimum": -96.55,
            "maximum": -13.42
        }
    },
    {
        "temps": {
            "average": -62.94,
            "minimum": -97.11,
            "maximum": -15.34
        }
    },
    {
        "temps": {
            "average": -62.36,
            "minimum": -96.72,
            "maximum": -16.65
        }
    },
    {
        "temps": {
            "average": -57.35,
            "minimum": -96.44,
            "maximum": -10.77
        }
    },
    {
        "temps": {
            "average": -65.61,
            "minimum": -95.93,
            "maximum": -10.84
        }
    },
    {
        "temps": {
            "average": -59.56,
            "minimum": -96.52,
            "maximum": -14.05
        }
    },
    {
        "temps": {
            "average": -64.97,
            "minimum": -96.84,
            "maximum": -9.22
        }
    },
    {
        "temps": {
            "average": -59.95,
            "minimum": -96.8,
            "maximum": -14.98
        }
    },
    {
        "temps": {
            "average": -64.56,
            "minimum": -95.63,
            "maximum": -15.85
        }
    },
    {
        "temps": {
            "average": -60.66,
            "minimum": -95.82,
            "maximum": -15.83
        }
    },
    {
        "temps": {
            "average": -62.76,
            "minimum": -95.96,
            "maximum": -8.54
        }
    },
    {
        "temps": {
            "average": -67.45,
            "minimum": -96.83,
            "maximum": -6.51
        }
    },
    {
        "temps": {
            "average": -62.39,
            "minimum": -96.65,
            "maximum": -9.91
        }
    },
    {
        "temps": {
            "average": -57.6,
            "minimum": -96.01,
            "maximum": -7.4399999999999995
        }
    },
    {
        "temps": {
            "average": -63.28,
            "minimum": -96.87,
            "maximum": -15.91
        }
    },
    {
        "temps": {
            "average": -66.83,
            "minimum": -96.91,
            "maximum": -16.5
        }
    },
    {
        "temps": {
            "average": -62.43,
            "minimum": -95.45,
            "maximum": -4.4399999999999995
        }
    },
    {
        "temps": {
            "average": -57.69,
            "minimum": -97.19,
            "maximum": -11.87
        }
    },
    {
        "temps": {
            "average": -67.33,
            "minimum": -95.66,
            "maximum": -12.76
        }
    },
    {
        "temps": {
            "average": -56.18,
            "minimum": -96.76,
            "maximum": -18.36
        }
    },
    {
        "temps": {
            "average": -66.66,
            "minimum": -96.79,
            "maximum": -14.81
        }
    },
    {
        "temps": {
            "average": -61.33,
            "minimum": -96.98,
            "maximum": -16.07
        }
    },
    {
        "temps": {
            "average": -65.95,
            "minimum": -96.79,
            "maximum": -10.5
        }
    },
    {
        "temps": {
            "average": -67.01,
            "minimum": -96.67,
            "maximum": -12.41
        }
    },
    {
        "temps": {
            "average": -69.5,
            "minimum": -96.38,
            "maximum": -14.58
        }
    },
    {
        "temps": {
            "average": -62.69,
            "minimum": -97.82,
            "maximum": -9.94
        }
    },
    {
        "temps": {
            "average": -62.86,
            "minimum": -96.64,
            "maximum": -13.24
        }
    },
    {
        "temps": {
            "average": -62.21,
            "minimum": -95.99,
            "maximum": -8.92
        }
    },
    {
        "temps": {
            "average": -62.8,
            "minimum": -97.08,
            "maximum": -8.21
        }
    },
    {
        "temps": {
            "average": -61.94,
            "minimum": -94.61,
            "maximum": -9.11
        }
    },
    {
        "temps": {
            "average": -60.33,
            "minimum": -93.12,
            "maximum": -11.35
        }
    },
    {
        "temps": {
            "average": -66.02,
            "minimum": -93.13,
            "maximum": -7.6
        }
    },
    {
        "temps": {
            "average": -62.19,
            "minimum": -93.19,
            "maximum": -8.21
        }
    },
    {
        "temps": {
            "average": -67.55,
            "minimum": -94.46,
            "maximum": -8.84
        }
    },
    {
        "temps": {
            "average": -60.69,
            "minimum": -93.65,
            "maximum": -7.56
        }
    },
    {
        "temps": {
            "average": -66.67,
            "minimum": -93.9,
            "maximum": -9.24
        }
    },
    {
        "temps": {
            "average": -57.51,
            "minimum": -94.32,
            "maximum": -12.47
        }
    },
    {
        "temps": {
            "average": -62.35,
            "minimum": -94.11,
            "maximum": -2.2800000000000002
        }
    },
    {
        "temps": {
            "average": -53.74,
            "minimum": -94.54,
            "maximum": -4.0600000000000005
        }
    }
]

app.listen(process.env.PORT || 3000)

module.exports = express.Router()