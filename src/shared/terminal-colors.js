// Regular Colors
const Red = '\033[0;31m'
const Blue = '\033[0;34m'
const Orange = '\033[0;33m'
const Green = '\033[0;32m'
const Black = '\033[0;30m'
const Yellow = '\033[0;33m'
const Purple = '\033[0;35m'
const Cyan = '\033[0;36m'
const White = '\033[0;37m'
const oRegularColors = {
    Red,
    Blue,
    Orange,
    Green,
    Black,
    Yellow,
    Purple,
    Cyan,
    White,
}

// Bold
const BBlack = '\033[1;30m'
const BRed = '\033[1;31m'
const BGreen = '\033[1;32m'
const BYellow = '\033[1;33m'
const BBlue = '\033[1;34m'
const BPurple = '\033[1;35m'
const BCyan = '\033[1;36m'
const BWhite = '\033[1;37m'
const oBoldColors = {
    BBlack,
    BRed,
    BGreen,
    BYellow,
    BBlue,
    BPurple,
    BCyan,
    BWhite,
}

// Underline
const UBlack = '\033[4;30m'
const URed = '\033[4;31m'
const UGreen = '\033[4;32m'
const UYellow = '\033[4;33m'
const UBlue = '\033[4;34m'
const UPurple = '\033[4;35m'
const UCyan = '\033[4;36m'
const UWhite = '\033[4;37m'
const oUnderlineColors = {
    UBlack,
    URed,
    UGreen,
    UYellow,
    UBlue,
    UPurple,
    UCyan,
    UWhite,
}

module.exports = {
    oRegularColors,
    oBoldColors,
    oUnderlineColors,
}