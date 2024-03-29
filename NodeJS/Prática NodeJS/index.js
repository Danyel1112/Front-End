const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n\n" + questions[index] + "\n" + " -> ")
}

ask();

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if ( answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
Bacana Daniel!

O que você aprendeu hoje foi:
${answers[0]}

O que te aborreceu hoje e você poderia melhorar foi:
${answers[1]}

O que deixou feliz hoje:
${answers[2]}

Você ajudou ${answers[3]} pessoas hoje!!

Volte amanhã para novas reflexões!!
`)
    
})