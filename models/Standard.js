const dictionary = {
  domain: {
    '1': "Create",
    '2': "Perform",
    '3': "Critically Respond"
  },
  gle: {
    "1.1":"Generate and conceptualize artistic ideas and work.",
    "1.2":"Organize and develop artistic ideas and work.",
    "1.3":"Connect artistic ideas to personal experience and varied perspectives.",
    "1.4":"Refine towards completion of artistic work.",
    "2.1":"Select, analyze, and interpret artistic work for presentation.",
    "2.2":"Develop and refine artistic techniques, choices, and work for presentation.",
    "2.3":"Connect artistic work with audience, community, and ensemble.",
    "2.4":"Convey meaning through the presentation of artistic work.",
    "3.1":"Perceive and analyze artistic work.",
    "3.2":"Interpret intent and meaning in artistic work.",
    "3.3":"Connect artistic experiences to our world; past, present, and future.",
    "3.4":"Apply criteria to evaluate artistic work.",
  }
}

class Standard {
  constructor(obj){
    if(!obj.Grade){
      debugger
    }
    this.grade = obj.Grade.toString(),
    this.domain = dictionary.domain[obj["ID"].toString().match(/([123])\./)[1]],
    this.reference = obj["Reference"],
    this.gle = dictionary.gle[obj["Reference"].toString().match(/([123]\.[1234])/)[1]]
    this.eo = obj["Evidence Outcome"],
    this.iqs = obj["Inquiry Questions"],
    this.tasks = obj["Sample Tasks"],
    this.vocab = obj["Sample Vocab"],
    this.ces = obj["Colorado Essential Skills"]
    this.know = ""
    this.do = ""
    this.understand = ""
    this.id = `${this.grade}.${this.reference}`
  }
}

export default Standard