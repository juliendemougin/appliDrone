<template>
    <main class="container container--stats">
        <div class="upper-buttons upper-buttons--stats">
            <select class="select" name="drones" id="drones-select">
                <option value="Drone">Drone</option>
                <option value="Mavic3">Mavic 3</option>
                <option value="Air2S">Air 2S</option>
                <option value="EvoIIDual640T">EVO II Dual 640T</option>
            </select>
        </div>

        <div class="vol">
            <h1 class="vol__title">Temps de vol</h1>
            <div class="stats">
                <div class="stats__frow">
                    <div class="stats__item item">
                        <p class="item__name">S1</p>
                        <p class="item__hours">495h</p>
                    </div>
                    <div class="stats__item item">
                        <p class="item__name">S2</p>
                        <p class="item__hours">739h</p>
                    </div>
                </div>
                <div class="stats__srow">
                    <div class="stats__item item">
                        <p class="item__name">S3</p>
                        <p class="item__hours">251h</p>
                    </div>
                    <div class="stats__item item">
                        <p class="item__name">Nuit</p>
                        <p class="item__hours">0h</p>
                    </div>
                </div>
                <div class="stats__item item">
                    <p class="item__name">Total</p>
                    <p class="item__hours">1485h</p>
                </div>
            </div>

            <h2 class="entretien">Il vous reste 75h avant de faire la révision de ce drone</h2>
        </div>
        <div class="hidden-footer"></div>
    </main>
</template>