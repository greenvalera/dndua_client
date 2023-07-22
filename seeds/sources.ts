type Source = {
  id: string,
  name: string,
  code: string,
  isOfficial: boolean
};


const sources: Source[] = [{
    id: 'phb',
    name: "Players Handbook",
    code: "PHB",
    isOfficial: true,
  },
  {
    id: 'xgte',
    name: "Xanathar's Guide to Everything",
    code: "XGtE",
    isOfficial: true,
  },
  {
    id: 'scag',
    name: "Sword Coast Adventurer's Guide",
    code: "SCAG",
    isOfficial: true,
  },
  {
    id: 'tcoe',
    name: "Tasha's Cauldron of Everything",
    code: "TCoE",
    isOfficial: true,
  },
  {
    id: 'dmg',
    name: "Dungeon Master's Guide",
    code: "DMG",
    isOfficial: true,
  },
  {
    id: 'ftod',
    name: "Fizban's Treasury of Dragons",
    code: "FToD",
    isOfficial: true,
  },
  {
    id: 'vrgr',
    name: "Van Richten's Guide to Ravenloft",
    code: "VRGR",
    isOfficial: true,
  },
];

export default sources;