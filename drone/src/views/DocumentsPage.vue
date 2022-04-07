<template>
        <main class="container container--docs">
        <div class="upper-buttons">
            <form action="#">
                <input class="sm_button" type="submit" value="Ajouter document">
            </form>
            <select class="select" name="docs" id="docs-select">
                <option value="type document">Type document</option>
                <option value="Carnet de vol S1">Carnet de vol S1</option>
                <option value="Carnet de vol S2">Carnet de vol S2</option>
                <option value="Carnet de vol S3">Carnet de vol S3</option>
                <option value="Carnet de vol Nuit">Carnet de vol Nuit</option>
                <option value="Carnet d'entretien">Carnet d'entretien</option>
            </select>
        </div>

        <hr>

        <div class="document__container">
            <article class="document">
                <h2 class="document__title">Mission Cléopâtre</h2>
                <h3 class="document__date">15/02/2022</h3>
                <form action="#">
                    <input class="document__button" type="submit" value="Voir le pdf">
                </form>
            </article>
    
            <article class="document">
                <h2 class="document__title">Mission Impossible</h2>
                <h3 class="document__date">18/01/2022</h3>
                <form action="#">
                    <input class="document__button" type="submit" value="Voir le pdf">
                </form>
            </article>
    
            <article class="document">
                <h2 class="document__title">Mission 1</h2>
                <h3 class="document__date">05/02/2022</h3>
                <form action="#">
                    <input class="document__button" type="submit" value="Voir le pdf">
                </form>
            </article>
    
            <article class="document">
                <h2 class="document__title">Mission Possible</h2>
                <h3 class="document__date">24/11/2021</h3>
                <form action="#">
                    <input class="document__button" type="submit" value="Voir le pdf">
                </form>
            </article>
    
            <article class="document">
                <h2 class="document__title">Mission Test</h2>
                <h3 class="document__date">28/032022</h3>
                <form action="#">
                    <input class="document__button" type="submit" value="Voir le pdf">
                </form>
            </article>
    
            <article class="document">
                <h2 class="document__title">Mission Macron</h2>
                <h3 class="document__date">18/01/2022</h3>
                <form action="#">
                    <input class="document__button" type="submit" value="Voir le pdf">
                </form>
            </article>
        </div>
        <div class="hidden-footer"></div>
    </main>
</template>