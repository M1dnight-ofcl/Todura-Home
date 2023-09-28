import './ThemeBuilder.css'
const hexTransparencies = {
100: 'FF',
99: 'FC',
98: 'FA',
97: 'F7',
96: 'F5',
95: 'F2',
94: 'F0',
93: 'ED',
92: 'EB',
91: 'E8',
90: 'E6',
89: 'E3',
88: 'E0',
87: 'DE',
86: 'DB',
85: 'D9',
84: 'D6',
83: 'D4',
82: 'D1',
81: 'CF',
80: 'CC',
79: 'C9',
78: 'C7',
77: 'C4',
76: 'C2',
75: 'BF',
74: 'BD',
73: 'BA',
72: 'B8',
71: 'B5',
70: 'B3',
69: 'B0',
68: 'AD',
67: 'AB',
66: 'A8',
65: 'A6',
64: 'A3',
63: 'A1',
62: '9E',
61: '9C',
60: '99',
59: '96',
58: '94',
57: '91',
56: '8F',
55: '8C',
54: '8A',
53: '87',
52: '85',
51: '82',
50: '80',
49: '7D',
48: '7A',
47: '78',
46: '75',
45: '73',
44: '70',
43: '6E',
42: '6B',
41: '69',
40: '66',
39: '63',
38: '61',
37: '5E',
36: '5C',
35: '59',
34: '57',
33: '54',
32: '52',
31: '4F',
30: '4D',
29: '4A',
28: '47',
27: '45',
26: '42',
25: '40',
24: '3D',
23: '3B',
22: '38',
21: '36',
20: '33',
19: '30',
18: '2E',
17: '2B',
16: '29',
15: '26',
14: '24',
13: '21',
12: '1F',
11: '1C',
10: '1A',
9: '17',
8: '14',
7: '12',
6: '0F',
5: '0D',
4: '0A',
3: '08',
2: '05',
1: '03',
0: '00'
}
const ThemeBuilder = () => {
  const Sidebar = () => {
    const PickerBg = (prop) => {
      const update = (e, jsonKey) => {
        e.preventDefault();
        root.style.setProperty(`--${jsonKey}`, `url('${e.currentTarget.value}')`);
      }
      return (
        <>
          <span>{prop.label}: 
            <input className="input" onChange={(e) => update(e, prop.jsonKey)} type="text" id={prop.jsonKey} />
          </span><br />
        </>
      )
    }
    const PickerNumber = (prop) => {
      const update = (e, jsonKey) => {
        e.preventDefault();
        root.style.setProperty(`--${jsonKey}`, e.currentTarget.value);
      }
      return (
        <>
          <span>{prop.label}: <input className="input" onChange={(e) => update(e, prop.jsonKey)} type="text" id={prop.jsonKey} /></span><br />
        </>
      )
    }
    const Picker = (prop) => {
      let root = document.querySelector(":root");
      const updateColor = (e, jsonKey) => {
        e.preventDefault();
        root.style.setProperty(`--${jsonKey}`, e.currentTarget.value);
      }
      const updateColorAlpha = (e, jsonKey) => {
        e.preventDefault();
        root.style.setProperty(`--${jsonKey}`, document.getElementById(jsonKey).value + hexTransparencies[e.currentTarget.value]);
      }
      return (
        <>
          <span>{prop.label}: <br/>
          Color: <input className="colorinput" onChange={(e) => updateColor(e, prop.jsonKey)} type="color" id={prop.jsonKey} />
          <br/>Alpha: <input value="100" className="alphainput" onChange={(e) => updateColorAlpha(e, prop.jsonKey)} type="range" id={`${prop.jsonKey}a`} />
          </span><br /><br />
        </>
      )
    }
    return (
      <div className="sidebar">
        <Picker label="Background Primary" jsonKey="bg-color-primary" />
        <br />
        <Picker label="Ui Primary" jsonKey="ui-color-primary" />
        <Picker label="Ui Secondary" jsonKey="ui-color-secondary" />
        <Picker label="Ui Tertiary" jsonKey="ui-color-tertiary" />
        <Picker label="Ui Quaternary" jsonKey="ui-color-quaternary" />
        <br />
        <Picker label="Active" jsonKey="active" />
        <Picker label="Inactive" jsonKey="inactive" />
        <br />
        <Picker label="Navbar Color" jsonKey="navbar-color" />
        <br />
        <Picker label="Successful" jsonKey="successful" />
        <Picker label="Unsuccessful" jsonKey="unsuccessful" />
        <br />
        <Picker label="Heading 1" jsonKey="heading-color-1" />
        <Picker label="Paragraph 1" jsonKey="paragraph-color-1" />
        <br />
        <PickerNumber label="Active Border" jsonKey="active-outline-thickness" />
        <PickerNumber label="Border Radius" jsonKey="global-border-radius" />
        <PickerNumber label="Transition Time" jsonKey="global-transition-time" />
        <br />
        <PickerBg label="Background URL" jsonKey="background-image" />
        <PickerNumber label="Background Blur" jsonKey="background-image-blur" />
      </div>
    )
  }
  const Preview = () => {
    return (
      <div id="preview">
        <div id="navbar">
          <div id="title"></div>
          <div id="close"></div>
        </div>
        <div id="preview-sidebar">
          <div id="intro"></div>
          <div id="text1"></div>
          <div id="text2"></div>
          <div id="button"></div>
        </div>
        <div id="item">
          <div id="checkmark"></div>
          <div id="itemtitle"></div>
          <div id="itemtext"></div>
        </div>
      </div>
    )
  }
  const exportJson = () => {
    console.log('export begun')
    let computedStyle = getComputedStyle(document.body);
    let fileContents = {
      "bg-color-primary": computedStyle.getPropertyValue("--bg-color-primary"),
    
      "ui-color-primary": computedStyle.getPropertyValue("--ui-color-primary"),
      "ui-color-secondary": computedStyle.getPropertyValue("--ui-color-secondary"),
      "ui-color-tertiary": computedStyle.getPropertyValue("--ui-color-tertiary"),
      "ui-color-quaternary": computedStyle.getPropertyValue("--ui-color-quarternary"),

      "navbar-color": computedStyle.getPropertyValue("--navbar-color"),

      "active": computedStyle.getPropertyValue("--active"),
      "inactive": computedStyle.getPropertyValue("--inactive"),
  
      "successful": computedStyle.getPropertyValue("--successful"),
      "unsuccessful": computedStyle.getPropertyValue("--unsuccessful"),

      "heading-color-1": computedStyle.getPropertyValue("--heading-color-1"),
      "paragraph-color-1": computedStyle.getPropertyValue("--paragraph-color-1"),

      "active-outline-thickness": computedStyle.getPropertyValue("--active-outline-thickness"),
      "global-border-radius": computedStyle.getPropertyValue("--global-border-radius"),
      "global-transition-time": computedStyle.getPropertyValue("--global-transition-time"),

      "background-image": computedStyle.getPropertyValue("--background-image"),
      "background-image-blur": computedStyle.getPropertyValue("--background-image-blur"),

      "font": computedStyle.getPropertyValue("--font"),
    }
    let contents = JSON.stringify(fileContents);
    let filename = "New Todura Theme";
    var a = document.createElement('a');
    var blob = new Blob([contents], {'type':"application/json"});
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
  }
  return (
    <div className='main'>
      <Sidebar />
      <Preview />
      <button id="exportButton" onClick={() => exportJson()}>Export to JSON</button>
    </div>
  )
}
export default ThemeBuilder;