// Calculadora - Atividade 3

var expressao = "";
var display = document.getElementById("display");

var COR_NORMAL = "linear-gradient(gray, black)";
var COR_DESTAQUE = "linear-gradient(gray, red)";

// ---------- Funções da calculadora ----------

function pressed(valor) {
    expressao = expressao + valor;
    display.innerHTML = expressao;
}

function clearAll() {
    expressao = "";
    display.innerHTML = "";
}

function backspace() {
    expressao = expressao.slice(0, -1);
    display.innerHTML = expressao;
}

function calculate() {
    if (expressao == "") {
        return;
    }
    try {
        var resultado = eval(expressao);
        expressao = String(resultado);
        display.innerHTML = expressao;
    } catch (erro) {
        expressao = "";
        display.innerHTML = "Erro";
    }
}

// ---------- Efeito visual ----------

function acender(botao) {
    botao.style.backgroundImage = COR_DESTAQUE;
}

function apagar(botao) {
    botao.style.backgroundImage = COR_NORMAL;
}

function apagarTodos() {
    var botoes = document.querySelectorAll(".btn");
    for (var i = 0; i < botoes.length; i++) {
        apagar(botoes[i]);
    }
}

// Procura o botão pelo texto que está escrito nele
function acharBotao(texto) {
    var botoes = document.querySelectorAll(".btn");
    for (var i = 0; i < botoes.length; i++) {
        if (botoes[i].textContent == texto) {
            return botoes[i];
        }
    }
    return null;
}

// ---------- Mouse ----------

var botoes = document.querySelectorAll(".btn");
for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("mousedown", function () {
        acender(this);
    });
    botoes[i].addEventListener("mouseup", function () {
        apagar(this);
    });
    botoes[i].addEventListener("mouseleave", function () {
        apagar(this);
    });
}

// ---------- Teclado ----------

// Converte a tecla pressionada no texto do botão correspondente
function textoDaTecla(tecla) {
    if (tecla == "Backspace") return "<";
    if (tecla == "Enter") return "=";
    if (tecla == "Escape") return "C";
    return tecla;
}

document.addEventListener("keydown", function (evento) {
    var texto = textoDaTecla(evento.key);
    var botao = acharBotao(texto);

    if (botao == null) {
        return; // tecla que não é da calculadora
    }

    evento.preventDefault(); // evita que o Enter clique no botão focado
    if (evento.repeat) {
        return; // ignora tecla segurada
    }

    acender(botao);

    if (texto == "<") {
        backspace();
    } else if (texto == "=") {
        calculate();
    } else if (texto == "C") {
        clearAll();
    } else {
        pressed(texto);
    }
});

document.addEventListener("keyup", function (evento) {
    var botao = acharBotao(textoDaTecla(evento.key));
    if (botao != null) {
        apagar(botao);
    }
});

// Se a janela perder o foco com uma tecla segurada, apaga tudo
window.addEventListener("blur", apagarTodos);
