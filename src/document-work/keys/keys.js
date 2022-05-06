const keys = [
    {
        id: 0,
        classNames: ['key', 'tild'],
        defaultValue: '`',
        shiftValue: '~',
        translates: null
    },
    {
        id: 1,
        classNames: ['key', 'number'],
        defaultValue: '1',
        shiftValue: '!',
        translates: null
    },
    {
        id: 2,
        classNames: ['key', 'number'],
        defaultValue: '2',
        shiftValue: '@',
        translates: {
            ru: {
                defaultValue: '2',
                shiftValue: '"',
            }
        }
    },
    {
        id: 3,
        classNames: ['key', 'number'],
        defaultValue: '3',
        shiftValue: '#',
        translates: {
            ru: {
                defaultValue: '3',
                shiftValue: '№',
            }
        }
    },
    {
        id: 4,
        classNames: ['key', 'number'],
        defaultValue: '4',
        shiftValue: '$',
        translates: {
            ru: {
                defaultValue: '4',
                shiftValue: '%',
            }
        }
    },
    {
        id: 5,
        classNames: ['key', 'number'],
        defaultValue: '5',
        shiftValue: '%',
        translates: {
            ru: {
                defaultValue: '5',
                shiftValue: ':',
            }
        }
    },
    {
        id: 6,
        classNames: ['key', 'number'],
        defaultValue: '6',
        shiftValue: '^',
        translates: {
            ru: {
                defaultValue: '6',
                shiftValue: ',',
            }
        }
    },
    {
        id: 7,
        classNames: ['key', 'number'],
        defaultValue: '7',
        shiftValue: '&',
        translates: {
            ru: {
                defaultValue: '7',
                shiftValue: '.',
            }
        }
    },
    {
        id: 8,
        classNames: ['key', 'number'],
        defaultValue: '8',
        shiftValue: '*',
        translates: {
            ru: {
                defaultValue: '8',
                shiftValue: ';',
            }
        }
    },
    {
        id: 9,
        classNames: ['key', 'number'],
        defaultValue: '9',
        shiftValue: '(',
        translates: null
    },
    {
        id: 10,
        classNames: ['key', 'number'],
        defaultValue: '0',
        shiftValue: '(',
        translates: null
    },
    {
        id: 11,
        classNames: ['key', 'number'],
        defaultValue: '-',
        shiftValue: '_',
        translates: null
    },
    {
        id: 12,
        classNames: ['key', 'number'],
        defaultValue: '=',
        shiftValue: '+',
        translates: null
    },
    {
        id: 13,
        classNames: ['key', 'backspace'],
        defaultValue: 'Backspace',
        shiftValue: null,
        translates: null
    },
    {
        id: 14,
        classNames: ['key', 'tab'],
        defaultValue: 'Tab',
        shiftValue: null,
        translates: null
    },
    {
        id: 15,
        classNames: ['key', 'letter'],
        defaultValue: 'q',
        shiftValue: 'Q',
        translates: {
            ru: {
                defaultValue: 'й',
                shiftValue: 'Й',
            }
        }
    },
    {
        id: 16,
        classNames: ['key', 'letter'],
        defaultValue: 'w',
        shiftValue: 'W',
        translates: {
            ru: {
                defaultValue: 'ц',
                shiftValue: 'Ц',
            }
        }
    },
    {
        id: 17,
        classNames: ['key', 'letter'],
        defaultValue: 'e',
        shiftValue: 'E',
        translates: {
            ru: {
                defaultValue: 'у',
                shiftValue: 'У',
            }
        }
    },
    {
        id: 18,
        classNames: ['key', 'letter'],
        defaultValue: 'r',
        shiftValue: 'R',
        translates: {
            ru: {
                defaultValue: 'к',
                shiftValue: 'К',
            }
        }
    },
    {
        id: 19,
        classNames: ['key', 'letter'],
        defaultValue: 't',
        shiftValue: 'T',
        translates: {
            ru: {
                defaultValue: 'е',
                shiftValue: 'Е',
            }
        }
    },
    {
        id: 20,
        classNames: ['key', 'letter'],
        defaultValue: 'y',
        shiftValue: 'Y',
        translates: {
            ru: {
                defaultValue: 'н',
                shiftValue: 'Н',
            }
        }
    },
    {
        id: 21,
        classNames: ['key', 'letter'],
        defaultValue: 'u',
        shiftValue: 'U',
        translates: {
            ru: {
                defaultValue: 'г',
                shiftValue: 'Г',
            }
        }
    },
    {
        id: 22,
        classNames: ['key', 'letter'],
        defaultValue: 'i',
        shiftValue: 'I',
        translates: {
            ru: {
                defaultValue: 'ш',
                shiftValue: 'Ш',
            }
        }
    },
    {
        id: 23,
        classNames: ['key', 'letter'],
        defaultValue: 'o',
        shiftValue: 'O',
        translates: {
            ru: {
                defaultValue: 'щ',
                shiftValue: 'Щ',
            }
        }
    },
    {
        id: 24,
        classNames: ['key', 'letter'],
        defaultValue: 'p',
        shiftValue: 'P',
        translates: {
            ru: {
                defaultValue: 'з',
                shiftValue: 'З',
            }
        }
    },
    {
        id: 25,
        classNames: ['key', 'letter'],
        defaultValue: '[',
        shiftValue: '{',
        translates: {
            ru: {
                defaultValue: 'х',
                shiftValue: 'х',
            }
        }
    },
    {
        id: 26,
        classNames: ['key', 'letter'],
        defaultValue: ']',
        shiftValue: '}',
        translates: {
            ru: {
                defaultValue: 'ъ',
                shiftValue: 'Ъ',
            }
        }
    },
    {
        id: 27,
        classNames: ['key', 'letter'],
        defaultValue: '\\',
        shiftValue: '|',
        translates: {
            ru: {
                defaultValue: 'ё',
                shiftValue: 'Ё',
            }
        }
    },
    {
        id: 28,
        classNames: ['key', 'delete'],
        defaultValue: 'Del',
        shiftValue: null,
        translates: null
    },
    {
        id: 29,
        classNames: ['key', 'capsLock'],
        defaultValue: 'CapsLock',
        shiftValue: null,
        translates: null
    },
    {
        id: 30,
        classNames: ['key', 'letter'],
        defaultValue: 'a',
        shiftValue: 'A',
        translates: {
            ru: {
                defaultValue: 'ф',
                shiftValue: 'Ф',
            }
        }
    },
    {
        id: 31,
        classNames: ['key', 'letter'],
        defaultValue: 's',
        shiftValue: 'S',
        translates: {
            ru: {
                defaultValue: 'ы',
                shiftValue: 'Ы',
            }
        }
    },
    {
        id: 32,
        classNames: ['key', 'letter'],
        defaultValue: 'd',
        shiftValue: 'D',
        translates: {
            ru: {
                defaultValue: 'в',
                shiftValue: 'В',
            }
        }
    },
    {
        id: 33,
        classNames: ['key', 'letter'],
        defaultValue: 'f',
        shiftValue: 'F',
        translates: {
            ru: {
                defaultValue: 'а',
                shiftValue: 'А',
            }
        }
    },
    {
        id: 34,
        classNames: ['key', 'letter'],
        defaultValue: 'g',
        shiftValue: 'G',
        translates: {
            ru: {
                defaultValue: 'п',
                shiftValue: 'П',
            }
        }
    },
    {
        id: 35,
        classNames: ['key', 'letter'],
        defaultValue: 'h',
        shiftValue: 'H',
        translates: {
            ru: {
                defaultValue: 'р',
                shiftValue: 'Р',
            }
        }
    },
    {
        id: 36,
        classNames: ['key', 'letter'],
        defaultValue: 'j',
        shiftValue: 'J',
        translates: {
            ru: {
                defaultValue: 'о',
                shiftValue: 'О',
            }
        }
    },
    {
        id: 37,
        classNames: ['key', 'letter'],
        defaultValue: 'k',
        shiftValue: 'K',
        translates: {
            ru: {
                defaultValue: 'л',
                shiftValue: 'Л',
            }
        }
    },
    {
        id: 38,
        classNames: ['key', 'letter'],
        defaultValue: 'l',
        shiftValue: 'l',
        translates: {
            ru: {
                defaultValue: 'д',
                shiftValue: 'Д',
            }
        }
    },
    {
        id: 39,
        classNames: ['key', 'letter'],
        defaultValue: ';',
        shiftValue: ':',
        translates: {
            ru: {
                defaultValue: 'ж',
                shiftValue: 'Ж',
            }
        }
    },
    {
        id: 40,
        classNames: ['key', 'letter'],
        defaultValue: '\'',
        shiftValue: '"',
        translates: {
            ru: {
                defaultValue: 'э',
                shiftValue: 'Э',
            }
        }
    },
    {
        id: 41,
        classNames: ['key', 'enter'],
        defaultValue: 'Enter',
        shiftValue: null,
        translates: null
    },
    {
        id: 42,
        classNames: ['key', 'shift'],
        defaultValue: 'Shift',
        shiftValue: null,
        translates: null
    },
    {
        id: 43,
        classNames: ['key', 'letter'],
        defaultValue: 'z',
        shiftValue: 'Z',
        translates: {
            ru: {
                defaultValue: 'я',
                shiftValue: 'Я',
            }
        }
    },
    {
        id: 44,
        classNames: ['key', 'letter'],
        defaultValue: 'x',
        shiftValue: 'X',
        translates: {
            ru: {
                defaultValue: 'ч',
                shiftValue: 'Ч',
            }
        }
    },
    {
        id: 45,
        classNames: ['key', 'letter'],
        defaultValue: 'c',
        shiftValue: 'C',
        translates: {
            ru: {
                defaultValue: 'с',
                shiftValue: 'С',
            }
        }
    },
    {
        id: 46,
        classNames: ['key', 'letter'],
        defaultValue: 'v',
        shiftValue: 'V',
        translates: {
            ru: {
                defaultValue: 'м',
                shiftValue: 'М',
            }
        }
    },
    {
        id: 47,
        classNames: ['key', 'letter'],
        defaultValue: 'b',
        shiftValue: 'B',
        translates: {
            ru: {
                defaultValue: 'и',
                shiftValue: 'И',
            }
        }
    },
    {
        id: 48,
        classNames: ['key', 'letter'],
        defaultValue: 'n',
        shiftValue: 'N',
        translates: {
            ru: {
                defaultValue: 'т',
                shiftValue: 'Т',
            }
        }
    },
    {
        id: 49,
        classNames: ['key', 'letter'],
        defaultValue: 'm',
        shiftValue: 'M',
        translates: {
            ru: {
                defaultValue: 'ь',
                shiftValue: 'Ь',
            }
        }
    },
    {
        id: 50,
        classNames: ['key', 'letter'],
        defaultValue: ',',
        shiftValue: '<',
        translates: {
            ru: {
                defaultValue: 'с',
                shiftValue: 'С',
            }
        }
    },
    {
        id: 51,
        classNames: ['key', 'letter'],
        defaultValue: '.',
        shiftValue: '>',
        translates: {
            ru: {
                defaultValue: 'с',
                shiftValue: 'С',
            }
        }
    },
    {
        id: 52,
        classNames: ['key', 'letter'],
        defaultValue: '/',
        shiftValue: '?',
        translates: {
            ru: {
                defaultValue: 'с',
                shiftValue: 'С',
            }
        }
    },
    {
        id: 53,
        classNames: ['key', 'arrow'],
        defaultValue: '△',
        shiftValue: null,
        translates: null
    },
    {
        id: 54,
        classNames: ['key', 'shift2'],
        defaultValue: 'Shift',
        shiftValue: null,
        translates: null
    },
    {
        id: 55,
        classNames: ['key', 'control'],
        defaultValue: 'Control',
        shiftValue: null,
        translates: null
    },
    {
        id: 56,
        classNames: ['key', 'option'],
        defaultValue: 'Option',
        shiftValue: null,
        translates: null
    },
    {
        id: 57,
        classNames: ['key', 'command'],
        defaultValue: 'Command',
        shiftValue: null,
        translates: null
    },
    {
        id: 58,
        classNames: ['key', 'space'],
        defaultValue: '',
        shiftValue: null,
        translates: null
    },
    {
        id: 59,
        classNames: ['key', 'command'],
        defaultValue: 'Command',
        shiftValue: null,
        translates: null
    },
    {
        id: 60,
        classNames: ['key', 'control'],
        defaultValue: 'Control',
        shiftValue: null,
        translates: null
    },
    {
        id: 61,
        classNames: ['key', 'arrow'],
        defaultValue: '◁',
        shiftValue: null,
        translates: null
    },
    {
        id: 62,
        classNames: ['key', 'arrow'],
        defaultValue: '▽',
        shiftValue: null,
        translates: null
    },
    {
        id: 63,
        classNames: ['key', 'arrow'],
        defaultValue: '▷',
        shiftValue: null,
        translates: null
    },
    
];

export {
    keys
}