angular.module('app.tpl', ['archive.tpl.html', 'about.tpl.html', 'calendar.tpl.html', 'focus.tpl.html', 'help.tpl.html', 'kalender.tpl.html', 'list_item.tpl.html', 'modal.delete.tpl.html', 'modal.edit_task_name.tpl.html', 'modal.focus.distraction_list_confirmation.tpl.html', 'modal.focus.stop_timer.tpl.html', 'modal.later.tpl.html', 'modal.pick_endtime.tpl.html', 'modal.pick_latertime.tpl.html', 'modal.pick_parent_task.tpl.html', 'modal.pick_postponetime.tpl.html', 'modal.pick_remindertime.tpl.html', 'modal.pick_repeattime.tpl.html', 'modal.pick_starttime.tpl.html', 'modal.pick_starttimeperiod.tpl.html', 'modal.plan.tpl.html', 'modal.postpone.tpl.html', 'modal.timer.tpl.html', 'organize.tpl.html', 'settings.tpl.html', 'statistics.tpl.html', 'todo.tpl.html', 'help/about.tpl.html', 'help/archive.tpl.html', 'help/calendar.tpl.html', 'help/exit.tpl.html', 'help/help.tpl.html', 'help/focus.tpl.html', 'help/organize.tpl.html', 'help/settings.tpl.html', 'help/statistics.tpl.html', 'help/todo.tpl.html', 'help/plan/duration.tpl.html', 'help/plan/ereminder.tpl.html', 'help/plan/eremove.tpl.html', 'help/plan/exact.tpl.html', 'help/plan/period.tpl.html', 'help/plan/preminder.tpl.html', 'help/plan/premove.tpl.html', 'help/plan/priority.tpl.html', 'help/plan/repeat.tpl.html', 'help/plan/type.tpl.html', 'help/settings/ball.tpl.html', 'help/settings/clean.tpl.html', 'help/settings/nav.tpl.html', 'help/settings/plan.tpl.html', 'help/settings/popups.tpl.html', 'help/settings/sdone.tpl.html', 'help/settings/settings.tpl.html', 'help/settings/sfocus.tpl.html', 'help/settings/slong.tpl.html', 'help/settings/slope.tpl.html', 'help/settings/sshort.tpl.html', 'help/settings/weeks.tpl.html']);

angular.module("about.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("about.tpl.html",
        "<div class=\"about-page\">\n" +
        "  <h1>Om IDA-appen</h1>\n" +
        "  <p>IDA - från kaos till koll</p>\n" +
        "  <p>Version: {{$root.$version||'1.2'}}</p>\n" +
        "  <p>IDA-appen är utvecklad inom ett forskningssamarbete mellan Karolinska Institutet, med Viktor Kaldo som ansvarig forskare inom Nils Lindefors forskningsgrupp och Remente AB. IDA-appen har ingått som en del i ett internetbaserat behandlingsprogram  för vuxna med ADHD.</p>\n" +
        "  <p>Ursprunglig ide och övergripande funktioner: Niels Eék, Viktor Kaldo och Berkeh Nasri</p>\n" +
        "  <p>Kravspecifikation: Viktor Kaldo</p>\n" +
        "  <p>Gränssnitt och layout: Erik Frisk och Viktor Kaldo</p>\n" +
        "  <p>Utveckling: Luuk van Egeraat och Nazar Ivanenko</p>\n" +
        "  <p>Testning: Viktor Kaldo, med stöd av Maria Cassel och Berkeh Nasri</p>\n" +
        "  <br/>\n" +
        "  <p>Projektledning Karolinska Institutet: Viktor Kaldo</p>\n" +
        "  <p>Projektledning Remente: David Brudö</p>\n" +
        "</div>\n" +
        "\n" +
        "");
}]);

angular.module("archive.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("archive.tpl.html",
        "<div class=\"archive-page\">\n" +
        "  <div class=\"toggle-tab\">\n" +
        "    <button ng-click=\"deletedPage=false\" class=\"done\" ng-class=\"{active:!deletedPage}\">\n" +
        "      <i class=\"fa fa-check-square-o\"></i> Gjorda\n" +
        "    </button><!--\n" +
        " --><button ng-click=\"deletedPage=true\" class=\"deleted\" ng-class=\"{active:deletedPage}\">\n" +
        "      <i class=\"fa fa-trash-o\"></i> Raderade\n" +
        "    </button>\n" +
        "  </div>\n" +
        "\n" +
        "  <ul ng-if=\"!deletedPage\" class=\"todo-list\">\n" +
        "    <li class=\"list-item\"\n" +
        "      ng-repeat=\"task in $tasks.where({isChild:false,finished:true})|orderBy:['-updated'] track by $index\"\n" +
        "      ida-item=\"task\"></li>\n" +
        "  </ul>\n" +
        "\n" +
        "  <ul  ng-if=\"deletedPage\" class=\"todo-list\">\n" +
        "    <li class=\"list-item\"\n" +
        "      ng-repeat=\"task in $tasks.where({planned:true,isChild:false,deleted:true})|orderBy:['-updated'] track by $index\"\n" +
        "      ida-item=\"task\"></li>\n" +
        "  </ul>\n" +
        "\n" +
        "  <div ng-if=\"!deletedPage\" class=\"confirmation reset-all-tasks\">\n" +
        "    <a ng-click=\"clearTasks('gjorda')\">Ta bort gjorda aktiviteter helt</a>\n" +
        "  </div>\n" +
        "\n" +
        "  <div ng-if=\"deletedPage\" class=\"confirmation reset-all-tasks\">\n" +
        "    <a ng-click=\"clearTasks('raderade')\">Ta bort raderade aktiviteter helt</a>\n" +
        "  </div>\n" +
        "\n" +
        "</div>\n" +
        "");
}]);

angular.module("calendar.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("calendar.tpl.html",
        "<!-- <div class=\"calendar-page date-picker\"> -->\n" +
        "  <ul>\n" +
        "    <li ng-if=\"title\"><b>{{title}}</b></li>\n" +
        "    <li id=\"tag{{tp.time+(tp.week?'week':'')}}\"\n" +
        "      ng-class=\"{ weekend: tp.isWeekend, 'hide-button': tp.depth === 2,\n" +
        "        'start-day': isMarked(task.startTime, tp),\n" +
        "        'end-day': isMarked(task.endTime, tp),\n" +
        "        'week-line': tp.week }\"\n" +
        "      ng-style=\"{'margin-left': (tp.depth * 15) + 'px' }\"\n" +
        "      ng-repeat=\"tp in selectDepth(periods, depth, selection) track by $index\">\n" +
        "\n" +
        "      <button ng-click=\"\n" +
        "        $parent.depth = $parent.depth !== tp.depth && tp.start == $parent.selection[tp.depth].start ? tp.depth : (tp.depth + 1);\n" +
        "        $parent.selection[tp.depth].start = tp.start;\n" +
        "        $parent.selection[tp.depth].end = tp.end;repaint();scrollTo('tag'+tp.time)\"\n" +
        "              ng-class=\"{ active:\n" +
        "                tp.depth < $parent.depth\n" +
        "                  && tp.start == $parent.selection[tp.depth].start\n" +
        "                  && tp.end == $parent.selection[tp.depth].end }\"></button>\n" +
        "\n" +
        "      <span ng-click=\"$parent.depth=tp.depth;(tp.start!==$parent.time&&isValid(tp))\" ng-class=\"{'active':!tp.week&&tp.depth===$parent.depth&&tp.start<=$parent.time&&tp.end>$parent.time,'no-sub-label':!tp.subLabel }\">\n" +
        "        <span>{{tp.label}}</span><br>\n" +
        "        <i ng-show=\"tp.subLabel\">{{tp.subLabel}}</i>\n" +
        "      </span>\n" +
        "\n" +
        "      <div ng-if=\"!tp.week&&tp.depth===2&&tp.start<=$parent.time&&tp.end>$parent.time\" class=\"picker-tasks\">{{$root.$tasks.getPickerTasks(tp.start, tp.end)}}</div>\n" +
        "\n" +
        "      <div ng-if=\"!tp.week&&$create&&tp.depth==2&&tp.start<=$parent.time&&tp.end>$parent.time\" class=\"picker-task-add\" ng-click=\"addPickerTask(tp.time, tp.busyness >= 1)\"> Lägg till aktivitet</div>\n" +
        "\n" +
        "      <div class=\"exact-busyness\">\n" +
        "        <div class=\"exact-times\" ng-style=\"{ width: tp.exact + '%'}\"></div>\n" +
        "        <div class=\"circa-times\" ng-style=\"{ right: tp.exact + '%', width: tp.circa + '%'}\"></div>\n" +
        "      </div>\n" +
        "\n" +
        "      <div class=\"overall-busyness\">\n" +
        "        <div style=\"width:{{100*tp.busyness}}%;height:{{100*tp.busyness}}%;\"\n" +
        "             ng-class=\"{ 'color-0': 0.0 <= tp.busyness && tp.busyness < 0.1,\n" +
        "                         'color-1': 0.1 <= tp.busyness && tp.busyness < 0.2,\n" +
        "                         'color-2': 0.2 <= tp.busyness && tp.busyness < 0.3,\n" +
        "                         'color-3': 0.3 <= tp.busyness && tp.busyness < 0.4,\n" +
        "                         'color-4': 0.4 <= tp.busyness && tp.busyness < 0.5,\n" +
        "                         'color-5': 0.5 <= tp.busyness && tp.busyness < 0.6,\n" +
        "                         'color-6': 0.6 <= tp.busyness && tp.busyness < 0.7,\n" +
        "                         'color-7': 0.7 <= tp.busyness && tp.busyness < 0.8,\n" +
        "                         'color-8': 0.8 <= tp.busyness && tp.busyness < 0.9,\n" +
        "                         'color-9': 0.9 <= tp.busyness && tp.busyness }\">\n" +
        "          <i ng-show=\"tp.busyness >= 1.0\" class=\"fa fa-exclamation\"></i>\n" +
        "        </div>\n" +
        "      </div>\n" +
        "    </li>\n" +
        "  </ul>\n" +
        "<!-- </div> -->\n" +
        "");
}]);

angular.module("focus.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("focus.tpl.html",
        "<div class=\"focus-page\" id=\"focusTop\">\n" +
        "\n" +
        "  <!-- input view -->\n" +
        "  <input class=\"task-label\" ng-model=\"task.title\" placeholder=\"Ange aktivitet...\" ng-show=\"created&&view==='input'\">\n" +
        "\n" +
        "  <!-- input view -->\n" +
        "  <p class=\"task-label\" ng-show=\"!crated&&view==='input'||view=='focus'\">{{task.title}}</p>\n" +
        "\n" +
        "  <!-- review view -->\n" +
        "  <button ng-show=\"view==='review'\" ng-click=\"restartTimer()\">Starta timer igen</button>\n" +
        "\n" +
        "  <!-- view 1 -->\n" +
        "  <div id=\"duration-picker\" ng-show=\"view==='input'\"><!--\n" +
        "  --><label>timmar</label><!--\n" +
        "  --><label>minuter</label><!--\n" +
        "  --><br><!--\n" +
        "  --><input type=\"number\" placeholder=\"0\" ng-model=\"hours\"><!--\n" +
        "  --><input type=\"number\" placeholder=\"0\" ng-model=\"minutes\"><!--\n" +
        "  --><br><!--\n" +
        "  --><button ng-show=\"task.title\" ng-click=\"setTime()\">Börja fokusera <b>endast</b> på uppgiften</button>\n" +
        "  </div>\n" +
        "\n" +
        "  <!-- focusing view -->\n" +
        "  <div id=\"pie-timer\" ng-show=\"view==='focus'\">\n" +
        "    <div ng-click=\"stopTimer()\" id=\"timer\">\n" +
        "      <div id=\"slice\" ng-class=\"{gt50:degrees>180}\">\n" +
        "        <div class=\"pie\" ng-style=\"{transform:'rotate('+degrees+'deg)','-webkit-transform':'rotate('+degrees+'deg)'}\"></div>\n" +
        "        <div class=\"pie fill\" ng-show=\"degrees>180\"></div>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "    <br>\n" +
        "    <span>\n" +
        "      <span ng-bind=\"hoursLeft?hoursLeft+' :':''\"></span>\n" +
        "      <span ng-bind=\"hoursLeft?(minutesLeft<10?'0'+minutesLeft:minutesLeft):minutesLeft\"></span> :\n" +
        "      <span ng-bind=\"secondsLeft<10?'0'+secondsLeft:secondsLeft\"></span>\n" +
        "    </span>\n" +
        "  </div>\n" +
        "\n" +
        "  <form class=\"add-task\" ng-show=\"view==='focus'\">\n" +
        "    <div><input ng-model=\"newTask\" placeholder=\"Skriv in, glöm och fortsätt fokusera!\"></div>\n" +
        "    <button ng-click=\"addTask(newTask)&&(newTask=''||showDistractionListForXSeconds())\"><i class=\"fa fa-plus\"></i></button>\n" +
        "  </form>\n" +
        "  <div id=\"distraction-list\" ng-show=\"$tasks.distractionListTasks(loadFocusTime).length>0\">\n" +
        "    <span ng-click=\"showDistractionListForXSeconds()\"><i class=\"fa fa-ban\"></i> Distraktionslista</span>\n" +
        "    <p ng-if=\"view==='review'&&showMainTask\">Fortsätt fokusera genom att starta timern igen eller gå igenom allt på Distraktionslistan och aktiviteten du nyss jobbat med.</p>\n" +
        "    <ul ng-show=\"showDistractionList\" ng-class=\"{'disabled':view==='focus'}\">\n" +
        "      <li ng-show=\"view==='review'&&!task.complete&&!task.deleted&&showMainTask\" class=\"list-item current-task\" ida-item=\"task\"></li>\n" +
        "      <li class=\"list-item\" ng-repeat=\"dtask in $tasks.distractionListTasks(loadFocusTime)|orderBy:['-updated'] track by $index\" ida-item=\"dtask\"></li>\n" +
        "    </ul>\n" +
        "  </div>\n" +
        "\n" +
        "  <div class=\"distraction-list-empty\" ng-show=\"view==='review'&&$tasks.distractionListTasks(loadFocusTime).length===0\">\n" +
        "    <ul><li ng-show=\"!task.complete&&!task.deleted\" class=\"list-item current-task\" ida-item=\"task\"></li></ul>\n" +
        "    <p>\n" +
        "      Du har gått igenom hela Distraktionslistan. Bra jobbat!\n" +
        "      <a ng-href=\"#/todo\">Till Att Göra-listan</a>\n" +
        "    </p>\n" +
        "  </div>\n" +
        "\n" +
        "  <br>\n" +
        "  <span id=\"focusBottom\"></span>\n" +
        "</div>\n" +
        "");
}]);

angular.module("help.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help.tpl.html",
        "<div class=\"help-page\">\n" +
        "\n" +
        "  <a class=\"feedback\" href=\"mailto:viktor.kaldo@ki.se?subject=Feedback%20p%C3%A5%20ADHD%20App\">\n" +
        "    <i class=\"fa fa-comment-o\"></i> Skicka feedback\n" +
        "  </a>\n" +
        "\n" +
        "  <div class=\"help-text\">\n" +
        "    <h1>Hjälp</h1>\n" +
        "\n" +
        "    <h2>IDA – från kaos till koll</h2>\n" +
        "    <p>\n" +
        "      IDA är en kalender, en Att-Göra-lista och ett smart system för att inte glömma saker i en och \n" +
        "      samma app. Ett särskilt verktyg för att fokusera på bara <i>en</i> sak när det verkligen \n" +
        "      behövs ingår också.\n" +
        "    </p>\n" +
        "    \n" +
        "    <h2>Hur hittar jag rätt i IDA?</h2>\n" +
        "    <p>\n" +
        "      Menyn når du alltid via knappen längst upp till vänster. Fyra av sidorna är extra viktiga:\n" +
        "    </p>\n" +
        "\n" +
        "    <h3>Att-Göra-listan</h3>\n" +
        "    <p>\n" +
        "      Här kan du lägga in allt du kommer på att du behöver göra och minnas. Du ser allt du planerat in för idag, idag och imorgon eller närmsta veckan och andra aktuella uppgifter att ta tag i. Låt inte aktiviteterna ligga för länge under rubriken <i>Oplanerade</i> utan gör klart dem direkt eller planera dem mer ordentligt så fort du får tid.\n" +
        "    </p>\n" +
        "    <p>\n" +
        "      Ju mer du använder IDA, desto bättre vardagskompass blir den här sidan för dig!\n" +
        "    </p>\n" +
        "\n" +
        "    <h3>Organisera alla aktiviteter</h3>\n" +
        "    <p>\n" +
        "      När du ska få överblick över alla aktiviteter eller angripa en stor arbetsuppgift genom att dela upp den går du hit. Här får du den bästa översikten över <b>allt</b> du lagt in och kan städa upp bland sådant du glömt, har svårt att få gjort eller som gör din kalender överfull.\n" +
        "    </p>\n" +
        "\n" +
        "    <h3>Fokusera på…</h3>\n" +
        "    <p>\n" +
        "      När du bestämt dig för att verkligen få en sak gjord är det här den perfekta startpunkten – den \n" +
        "      hjälper dig att hålla fokus en bestämd tid och att hantera alla distraherande tankar genom att \n" +
        "      lägga dem i en <i>distraktionslista</i>. När du jobbat klart går du igenom allt på distraktionslistan.\n" +
        "    </p>\n" +
        "\n" +
        "    <h3>Kalender</h3>\n" +
        "    <p>\n" +
        "      IDA:s kalender är speciell. Staplarna hjälper dig att se hur inbokad en dag är med tidsbestämda uppgifter som möten och liknande. Bollen visar IDAs gissning på hur upptagen en dag är totalt sett, när även sådant du exempelvis tänkt göra ”under veckan” räknas in. Ju mer du lägger in i IDA, desto bättre kan kalendern hjälpa dig hitta bra tider att planera in nya saker på.\n" +
        "    </p>\n" +
        "\n" +
        "    <h2>Vad är en Aktivitet?</h2>\n" +
        "    <p>\n" +
        "      Allt du lägger in i IDA! Det kan vara ett stort projekt som att ordna ett bröllop eller byta jobb eller en enkel påminnelse att packa barnens matsäck. IDA hjälper dig att hålla ordning på alla aktiviteter i din vardag genom att du planerar dem så här:\n" +
        "    </p>\n" +
        "\n" +
        "    <h3>Prioritet och omfattning</h3>\n" +
        "    <p>\n" +
        "      Alla aktiviteter är inte lika viktiga eller akuta. Detta är IDAs enkla system för att \n" +
        "      prioritera aktiviteter:\n" +
        "      <br>\n" +
        "      <b>A –</b> En viktig aktivitet som är rätt tydlig och avgränsad och inte tar jättelång tid\n" +
        "      <br>\n" +
        "      <b>B –</b> En tydlig, relativt liten och lätthanterlig aktivitet som dock ofta kan skjutas upp om det blir trångt om tid\n" +
        "    </p>\n" +
        "    <p>\n" +
        "      Aktiviteter kan också vara stora, övergripande och bestå av många olika delar, tex &ldquo;Fixa \n" +
        "      semestern&rdquo; eller &ldquo;Flytta&rdquo;. IDA använder dubbla bokstäver för dessa omfattande aktiviteter \n" +
        "      (som gärna ska delas upp):\n" +
        "      <br>\n" +
        "      <b>AA –</b> omfattande viktiga aktiviteter\n" +
        "      <br>\n" +
        "      <b>BB –</b> omfattande mindre viktiga/akuta\n" +
        "    </p>\n" +
        "\n" +
        "    <h3>När?</h3>\n" +
        "    <p>\n" +
        "      Tid är viktigt. När ska en aktivitet göras? Ibland är det lätt: &ldquo;möte kl 15&rdquo; eller &ldquo;påminn om \n" +
        "      medicin kl 8:30&rdquo;. Ibland är det svårare – exakt när utför man t ex &ldquo;Fixa semestern&rdquo;? \n" +
        "    </p>\n" +
        "    <p>\n" +
        "      För att fånga in dessa stora skillnader vill IDA att du väljer mellan två olika tidsinställningar:\n" +
        "      <br>\n" +
        "      <b>Exakt tid –</b> Du vet exakt, eller ungefär, när en aktivitet ska göras. Här kan du också ställa \n" +
        "      aktiviteter som återkommer dags- eller veckovis.\n" +
        "      <br>\n" +
        "      <b>Tidsperiod –</b> Aktiviteten ska göras någon gång under tidsperioden (t.ex. &ldquo;nästa vecka&rdquo;). Du \n" +
        "      sätter alltså både start- och slutdag.\n" +
        "      <br>\n" +
        "    </p>\n" +
        "    <p>\n" +
        "      Om du inte alls kan sätta en tid för aktiviteten kan du välja <i>Ingen tid</i>.\n" +
        "    </p>\n" +
        "\n" +
        "    <h3>Hur länge?</h3>\n" +
        "    <p>\n" +
        "      Hur lång tid tar aktiviteten att blir klar med? Utmärkt tillfälle för dig att träna upp din \n" +
        "      tidsuppfattning!\n" +
        "    </p>\n" +
        "    <p>\n" +
        "      Välj &ldquo;Cirka&rdquo; om du är osäker på tidsuppskattningen. Väljer du inget själv sätter IDA 15-45 \n" +
        "      minuter för A och B aktiviteter och 4-12 timmar för omfattande uppgifter.\n" +
        "    </p>\n" +
        "\n" +
        "    <h2>Påminnelser – två sätt att inte glömma</h2>\n" +
        "    <p>\n" +
        "      När du planerar en aktivitet kan du lägga en påminnelse – välj bara hur långt innan aktiviteten \n" +
        "      den ska komma <i>eller</i> sätt ett exakt klockslag.\n" +
        "    </p>\n" +
        "    <p>\n" +
        "      Dessutom – vill du bara snabbt lägga in en påminnelse senare idag för något du inte behöver \n" +
        "      planera så noga så skriv in den i Att-Göra-listan och välj <i>Påminnelse</i>.\n" +
        "    </p>\n" +
        "\n" +
        "    <h2>Vad syns i Att-Göra-listan?</h2>\n" +
        "    <p>\n" +
        "      Du kan ställa in Att-Göra-listan så att den visar aktiviteter för idag, idag och imorgon eller för den närmsta veckan. Då visas alla aktiviter som bokats in på exakta tider under de dagarna. Men, IDA är smartare än så! Aktiviteter utan exakt tid men med en start- och slutdag visas också om deras tidsperiod ingår i de dagar du valt att visa. De mest akuta visas över de tidbestämda uppgifterna, de andra under. Måste du scrolla för att se Att-Göra-listan? Då har du för många aktiviteter under <em>Oplanerat</em>! Gör, radera eller planera dem så att de försvinner.\n" +
        "    </p>\n" +
        "\n" +
        "    <h2>Hur får jag bort aktiviteter från Att-Göra-listan?</h2>\n" +
        "    <ul>\n" +
        "      <li>Gör dem – att få klicka i <i>klar-rutan</i> är alltid lika härligt!</li>\n" +
        "      <li>Byt tid – välj Planera ifall du vill tänka om helt, annars kan du trycka på ’Påminn mm’ för att skjuta upp till imorgon. Varning – fastna inte i skjuta-upp-träsket.</li>\n" +
        "      <li>Automatiskt – i vanliga fall har en aktivitet inställningen ’Bort när klar’ när du planerar den, men du kan ändra så att uppgiften automatiskt flyttas till vyn ’Organisera alla aktiviteter’ eller markeras som klar när tiden gått ut. Varning – använd inte detta för ofta, risken finns att du missar saker du behöver göra.</li>\n" +
        "    </ul>\n" +
        "    <h2>Organisera alla aktiviteter – hur lätt är det?</h2>\n" +
        "    <p>\n" +
        "      Det kan kännas övermäktigt, men gå regelbundet till den här sidan i IDA och fundera igenom dina aktiviteter för att få bättre koll. Många kan du säkert städa bort. Sortera aktiviteterna på olika sätt för att hitta lättare bland dem. Och framförallt – använd den utmärkta funktionen att lägga till underaktiviteter till en aktivitet! Det är så du får en mycket mer lätthanterlig plan för stora projekt som att “Planera bröllop” eller “Flytta”. Det bästa är att underaktiviteterna fortfarande är egna aktiviteter som du kan tidsboka eller lägga in påminnelser för.\n" +
        "    </p>\n" +
        "    <p>\n" +
        "      <i class=\"fa fa-plus\"></i> Lägger till en ny underaktivitet<br>\n" +
        "      <i class=\"fa fa-chevron-right\"></i> Gör aktuell aktivitet till en underaktivitet <br>\n" +
        "      <i class=\"fa fa-chevron-left\"></i> Om du vill frigöra en underaktivitet från sin överaktivitet\n" +
        "    </p>\n" +
        "    <h2>Stapeln och bollarna i Kalendern – vad betyder de?</h2>\n" +
        "    <p>\n" +
        "      Först – ju mer du lägger in i IDA och ju bättre du planerar varje aktivitet, t ex gissar hur lång tid den tar att göra, desto bättre kommer kalenderns symboler kunna visa hur mycket bokad och ledig tid du har.\n" +
        "    </p>\n" +
        "    <p>\n" +
        "      <b>Stapeln</b> visar den sammanlagda tiden för alla aktiviteter som du har gett en exakt tid för – \n" +
        "      den lägger helt enkelt ihop den tidsåtgång du angett för dessa. Om längden ofta är ungefärlig \n" +
        "      (cirka), så kommer toppen av stapeln att vara mer suddig/diffus då det är svår att säkert säga \n" +
        "      exakt hur mycket tid du bokat upp dig på. Tider som överlappar varandra räknas bara en gång \n" +
        "      – har du alltså bokat in 3 saker som börjar kl 14 och pågår en halvtimme kommer stapeln bara \n" +
        "      visa en halvtimme.\n" +
        "    </p>\n" +
        "    <p>\n" +
        "      <b>Bollens</b> storlek och färg visar totalt sett hur mycket du har att göra – ju större och rödare desto mer fullpackad är dagen/veckan/månaden. Det går inte att säga exakt vad en boll av en viss storlek och färg betyder, men när du använt IDA ett tag kommer du själv märka var din gräns för vad du klarar av under en dag går. Under ’Inställningar’ kan du också själv ställa in hur snabbt en dag ska markeras som överbokad. I bollen räknas massa faktorer in, bland annat:\n" +
        "      <ul>\n" +
        "        <li>Stapelns längd</li>\n" +
        "        <li>Aktiviteter som är inbokade en tidsperiod och som du kanske kommer göra helt eller delvis just då.</li>\n" +
        "        <li>Om aktiviteterna är enklare (B) eller svårare (A) att skjuta upp</li>\n" +
        "        <li>Om du har många korta aktiveter en viss dag så räknas tiden det tar att byta fokus mellan uppgifterna in.</li>\n" +
        "      </ul>\n" +
        "    </p>\n" +
        "\n" +
        "    <br>\n" +
        "    <br>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
}]);

angular.module("help/about.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/about.tpl.html",
        "<p>Information om oss som gjort IDA-appen och vilken version av den du har.</p>\n" +
        "");
}]);

angular.module("help/archive.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/archive.tpl.html",
        "<p>Hitta tidigare aktiviteter!</p>\n" +
        "\n" +
        "<p>Här hamnar både avklarade och raderade aktiviteter. Du kan återställa dem härifrån om du vill, men glöm inte göra om tidsinställningarna för dem om det behövs.</p>\n" +
        "");
}]);

angular.module("help/calendar.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/calendar.tpl.html",
        "<p>Håll koll på hur fullbokad du är!</p>\n" +
        "\n" +
        "<p>Förutom att se aktiviteter och skapa nya så har IDAs kalender en unik funktion - om du uppskattar hur lång tid varje aktivitet tar visar kalendern hur fullbokad en dag är genom:</p>\n" +
        "<p><i class=\"fa fa-circle green\"></i> Bollar som räknar in <em>alla</em> aktiviteter</p>\n" +
        "<p><span class=\"exact-busyness\"><span class=\"exact-times\"></span><span class=\"circa-times\"></span></span> Staplar för aktiviteter med <em>exakta tider</em></p>\n" +
        "\n" +
        "<p>Toppen på stapeln blir suddig om du i planeringen angett att aktiviteterna ”Tar cirka” en viss tid att göra.</p>\n" +
        "\n" +
        "<p>Skulle <i class=\"fa fa-exclamation-circle red large\"></i> dyka upp bör du flytta aktiviteter från den dagen!</p>\n" +
        "\n" +
        "<p>Planerar du något under en tidsperiod blir bollarna mot slutet större för att motverka att du skjuter på det.</p>\n" +
        "");
}]);

angular.module("help/exit.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/exit.tpl.html",
        "<p>Här lämnar du IDA-appen, men påminnelser och annat fungerar fortfarande. Du kan också avsluta genom att trycka på din ”hem-knapp” på mobilen eller på <i class=\"fa fa-sign-out purple-bg\"></i> uppe till höger på Att-Göra-listan. På andra vyer finns istället <i class=\"fa fa-home purple-bg\"></i> som gör att du kommer tillbaka till Att-Göra-listan.\n" +
        "");
}]);

angular.module("help/focus.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/focus.tpl.html",
        "<p>Det perfekta sättet att hålla fokus på en sak!</p>\n" +
        "\n" +
        "<p>Sätt dig avskilt, stäng ner appar/program, svara inte i telefon, be att få vara ostörd.</p>\n" +
        "<p>Starta timern för aktiviteten du valt/skrivit in. 20-25 minuter är bäst även om du vet att du behöver mer tid. Jobba <em>bara</em> med uppgiften tills timern piper.</p>\n" +
        "\n" +
        "<p><em>Inte klar?</em> Sätt timern på 5 min, gör något annat under den tiden och gör sedan ett till arbetspass.</p> \n" +
        "\n" +
        "<p><em>Börjar tänka på annat?</em> Skriv det i rutan och tryck <i class=\"fa fa-plus-square purple\"></i> så läggs det i Distraktionslistan. Då glöms det inte eftersom du går igenom listan sedan!</p>\n" +
        "\n" +
        "<p><em>Avbryta eller ändra tid?</em> Tryck på timern.</p>\n" +
        "");
}]);

angular.module("help/help.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/help.tpl.html",
        "<p>Lär dig om IDA och hjälp oss bli bättre!</p>\n" +
        "\n" +
        "<p>Här lär du dig grunderna i IDA, lägg 5 minuter på det om du inte redan gjort det! Hjälp finns också vid varje <i class=\"fa fa-question-circle large blue\"></i> men den är mindre utförlig och sammanhållen.</p>\n" +
        "<p>När du hittar något du tycker kan bli bättre – klicka på knappen Skicka feedback.</p>\n" +
        "");
}]);

angular.module("help/organize.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/organize.tpl.html",
        "<p>Här hittar du <em>alla</em> dina aktiviteter. Gå hit ofta och håll ordning på dem!</p>\n" +
        "\n" +
        "Sortera för att lätt hitta en aktivitet. Planera om eller radera de som passerat sin tidpunkt eller inte behöver göras.\n" +
        "\n" +
        "Dessutom – dela stora aktiviteter (ofta AA eller BB) i mindre delar:\n" +
        "<ul class=\"fa-ul\">\n" +
        "	<li><i class=\"fa fa-li fa-plus-square gray\"></i>Gör aktiviteten till en överaktivitet och skapar en underaktivitet till den.</li>\n" +
        " 	<li><i class=\"fa fa-li fa-chevron-right gray\"></i>Flyttar in aktiviteten under den aktivitet som du väljer i en lista.</li>\n" +
        "	<li><i class=\"fa fa-li fa-chevron-left gray\"></i>Är aktiviteten en underaktivitet så tryck här för att den ska bli en vanlig aktivitet.</li>\n" +
        "</ul>\n" +
        "\n" +
        "<p>Underaktiviteter bör också ha tider, påminnelser osv, men vill du snabbt göra många kan du i planeringen välja ”Ingen tid” för att slippa planera allt.</p>\n" +
        "");
}]);

angular.module("help/plan/duration.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/plan/duration.tpl.html",
        "<p>Här anger du hur mycket tid aktiviteten kräver. Uppskatta tiden även när det är svårt att veta – välj ”Tar cirka” för att tala om för IDA att du är osäker. Tiden som aktiviteterna tar styr storleken på Kalenderns bollar och staplar som visar hur uppbokad varje dag är. Sätter du ingen tidslängd räknas den automatiskt som 30 minuter.</p>\n" +
        "<p>OBS! Blanda inte ihop hur lång tid en aktivitet tar med att vissa aktiviteter görs under en viss tidsperiod.</p>\n" +
        "");
}]);

angular.module("help/plan/ereminder.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/plan/ereminder.tpl.html",
        "<p>En påminnelse för en aktivitet med ett bestämt klockslag utgår från det klockslaget – välj om du vill bli påmind precis när aktiviteten börjar eller en viss tid innan. Du kan även välja en helt egen tid för påminnelsen om du väljer alternativet längst ned, ’Påminn exakt tid’.</p>\n" +
        "");
}]);

angular.module("help/plan/eremove.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/plan/eremove.tpl.html",
        "<p>I Att-Göra-listan ska bara dina mest aktuella aktiviteter synas, därför är det viktigt att gamla aktiviteter tas bort från den. I vanliga fall ('Bort när klar') så ligger de kvar tills du markerar dem som färdiga eller raderar dem. Vill du istället att en aktivitet automatiskt ska bli osynlig på Att-Göra-listan när tiden gått ut så välj 'Bort vid sluttid'. Då syns den bara i vyn 'Organisera alla aktiviteter' men anses inte vara färdig - se upp så att du inte glömmer den! Vill du hellre räkna en aktivitet som helt klar när tiden gått ut, t ex för ett möte, så välj \"Auto-klar vid sluttid'. Varning för att använda denna inställning ofta, den gör det mycket lätt att helt glömma aktiviteter!</p>\n" +
        "<p>Alternativet ’Syns ej på Att-Göra’ används bara om du vill att t ex din arbetstid ska kunna synas i Kalendern som en stapel/boll men utan att du tycker att det behöver synas i din Att-Göra-lista.</p>\n" +
        "");
}]);

angular.module("help/plan/exact.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/plan/exact.tpl.html",
        "<p>Tryck på lila knappen för att välja ett datum i Kalendern. På den mindre grå knappen ställer du in vilken tid på dagen aktiviteten börjar.</p>\n" +
        "");
}]);

angular.module("help/plan/period.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/plan/period.tpl.html",
        "<p>Tryck överst för att snabbt välja vanliga tidsperioder, som ’imorgon’ eller ’nästa vecka’. Du han annars trycka på Från eller Till för att välja den första eller sista dagen i perioden direkt i kalendern (där starten är markerad med grönt och slutdagen med rött)</p>\n" +
        "");
}]);

angular.module("help/plan/preminder.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/plan/preminder.tpl.html",
        "<p>Tryck på lila knappen för att välja när i tidsperioden en påminnelse ska komma och använd gråa knappen för att välja klockslag. Välj ’Påminn exakt tid’ för att själv bestämma exakt dag för påminnelsen.</p>\n" +
        "");
}]);

angular.module("help/plan/premove.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/plan/premove.tpl.html",
        "<p>I Att-Göra-listan ska bara dina mest aktuella aktiviteter synas, därför bör andra aktiviteter tas bort från den. I vanliga fall (’Bort när Klar’) så ligger aktiviteter som ska göras en viss tidsperiod kvar tills du kryssar i rutan (eller raderar dem), men du kan välja att de automatiskt försvinner dagen efter tidsperioden (’Bort efter tidsperioden’).</p>\n" +
        "<p>Vill du att en aktivitet istället automatiskt markeras som klar när den sista dagen passerat så välj 'Autoklar efter tidsperioden'. Men se upp - om du faktiskt inte är klar med den då är risken mycket stor att du glömmer bort den om den försvinner helt från alla listor!</p>\n" +
        "");
}]);

angular.module("help/plan/priority.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/plan/priority.tpl.html",
        "<p>Aktiviteter är olika viktiga och omfattande</p>\n" +
        "<p><b>A</b> – En viktig aktivitet som ofta inte tar så lång tid eller måste delas upp</p>\n" +
        "<p><b>B</b> – En avgränsad, relativt liten aktivitet som kanske även kan hoppas över om det kniper</p>\n" +
        "<p><b>AA</b> – Stor, omfattande och viktig aktivitet som bör få olika underaktiviteter (skapas i vyn ”Organisera alla aktiviteter”)</p>\n" +
        "<p><b>BB</b> – Omfattande men mindre viktig/akut aktivitet, bra att dela upp i mindre delar</p>\n" +
        "<p>Ditt val påverkar ibland hur högt aktiviteten ligger på Att-Göra listan och hur mycket den får upptaget-bollarna (<small><i class=\"fa fa-circle green\"></i></small>, <i class=\"fa fa-circle yellow\"></i>, <i class=\"fa fa-exclamation-circle red fa-lg\"></i>) i kalendern att växa.</p>\n" +
        "");
}]);

angular.module("help/plan/repeat.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/plan/repeat.tpl.html",
        "<p>En del saker återkommer med jämna mellanrum, tex betalar man ofta räkningar i slutet av varje månad.\n" +
        "Här ställer du in om en aktivitet ska upprepas med ett visst antal (x) dagars mellanrum, en eller flera veckodagar varje vecka, ett visst datum varje månad eller ett visst datum varje år. Ställ även in hur långt in i framtiden aktiviteten ska upprepas.</p>\n" +
        "<p>Vill du upprepa något t ex varannan eller var 3e vecka, så ställ in antal dagar istället (14 respektive 21 dagar för exemplen).</p>\n" +
        "<p>OBS! Över- och underaktiviteter kan inte upprepas, så en upprepad aktivitet saknar <i class=\"fa fa-caret-right gray\"></i> och <i class=\"fa fa-plus-square gray\"></i> ikonerna.</p>\n" +
        "");
}]);

angular.module("help/plan/type.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/plan/type.tpl.html",
        "<p><b>Exakt tid</b> – Används för aktiviteter du har ett särskilt klockslag för samt för enkla påminnelser och sådant som återkommer dags- eller veckovis.</p>\n" +
        "<p><b>Tidsperiod</b> – Används när något inte behöver göras en exakt tid men ändå inte ska glömmas bort. Du anger istället en tidsperiod, t ex ’Nästa vecka’, då du ägnar dig åt aktiviteten en eller flera gånger. I Kalendern syns inte dessa aktiviteters namn, de syns bara genom att de förstorar upptaget-bollarna (<small><i class=\"fa fa-circle green\"></i></small>, <i class=\"fa fa-circle yellow\"></i>, <i class=\"fa fa-exclamation-circle red fa-lg\"></i>) för dagarna som ingår i tidsperioden.</p>\n" +
        "<p><b>Ingen tid</b> – använd bara för underaktiviteter, annars riskerar du att tappa bort dessa!</p>\n" +
        "");
}]);

angular.module("help/settings.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/settings.tpl.html",
        "<p>Här gör du så att IDA passar dig bättre: ljud, kalendern, var hjälptexter ska visas och när du ska bli påmind om att rensa och planera dina aktiviteter</p>\n" +
        "");
}]);

angular.module("help/settings/ball.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/settings/ball.tpl.html",
        "<p>Bollarna <small><i class=\"fa fa-circle green\"></i></small>, <i class=\"fa fa-circle yellow\"></i> och staplarna <span class=\"exact-busyness\"><span class=\"exact-times\"></span><span class=\"circa-times\"></span></span> i kalendern visar hur uppbokad en dag är. De växer när du lägger till nya uppgifter. Om du ser en <i class=\"fa fa-exclamation-circle red fa-lg\"></i> så är dagen överbokad! För att IDA ska passa just dig kan du här ställa in om de ska växa snabbt (<i class=\"icon fa fa-rocket gray\"></i>) eller långsamt (<i class=\"icon fa fa-paper-plane-o gray\"></i>), vilket också avgör hur snabbt en dag blir överbokad.</p>\n" +
        "");
}]);

angular.module("help/settings/clean.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/settings/clean.tpl.html",
        "<p>Att gå in på <i class=\"fa fa-folder-open gray\"></i> Organisera alla aktiviteter för att rensa bort passerade aktiviteter och planera framåt är lätt glömt. Här väljer du när och hur ofta du vill att IDA ska påminna dig om det.</p>\n" +
        "");
}]);

angular.module("help/settings/nav.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/settings/nav.tpl.html",
        "<p>Visar <i class=\"fa fa-question-circle blue\"></i> i huvudmenyn <i class=\"fa fa-bars gray\"></i> till vänster för att du lätt ska kunna sätta dig in i vad de olika delarna av IDA gör.</p>\n" +
        "");
}]);

angular.module("help/settings/plan.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/settings/plan.tpl.html",
        "<p>Visar en <i class=\"fa fa-question-circle blue\"></i> vid varje inställning och knapp i rutan där du planerar en aktivitet. Använd detta för att snabbt lära dig alla möjligheter IDA erbjuder!</p>\n" +
        "");
}]);

angular.module("help/settings/popups.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/settings/popups.tpl.html",
        "<p>En del meddelanden som kommer upp kan man stänga av genom att klicka på 'visa inte igen'. Om du gjort det men ångrar dig så tryck här för att återställa alla meddelanden. Minns du inte om du stängt av några meddelanden så prova att klicka här, de är enkla att ta bort igenom om du irriterar dig på dem.</p>\n" +
        "");
}]);

angular.module("help/settings/sdone.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/settings/sdone.tpl.html",
        "<p>Peppa dig själv med ett positivt ljud när du bockat av en aktivitet i <i class=\"icon fa fa-square-o gray\"></i>-rutan! Välj ditt favoritljud. Vill du inte ha ett ljud så dra ner volymen till <span class=\"icon icon-large fa-stack\"><i class=\"fa fa-volume-off gray fa-stack-1x\"></i><i class=\"fa fa-ban red fa-stack-1x\"></i></span></p>\n" +
        "");
}]);

angular.module("help/settings/settings.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/settings/settings.tpl.html",
        "<p>Visar <i class=\"fa fa-question-circle blue\"></i> i den här vyn så att du bättre förstår vad de olika inställningarna gör för något.</p>\n" +
        "");
}]);

angular.module("help/settings/sfocus.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/settings/sfocus.tpl.html",
        "<p>När du bestämd dig för att verkligen fokusera på bara <em>en</em> uppgift sätter du timern i vyn ’Fokusera på aktivitet’. Här ställer du in alarmet för den timern.</p>\n" +
        "");
}]);

angular.module("help/settings/slong.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/settings/slong.tpl.html",
        "<p>Ibland vill man vara extra säker på att inte missa en påminnelse. Använd då det långa alarmet! Välj typ av ljud och volym för det långa alarmet här.</p>\n" +
        "");
}]);

angular.module("help/settings/slope.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/settings/slope.tpl.html",
        "<p>Om en uppgift sträcker sig över flera dagar blir bollarna för alla de dagarna större.  Här kan du ställa in om du vill att bollarna mot slutet av perioden ska växa extra mycket. Det gör att risken är mindre att du bokar in mycket annat i slutet av perioden och ökar chansen att du hinner klart med uppgiften om du startar sent med den.</p>\n" +
        "");
}]);

angular.module("help/settings/sshort.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/settings/sshort.tpl.html",
        "<p>Om du vill ha ett mer diskret ljud för dina påminnelser, använd den korta signalen. Välj här vilken kort signal du vill använda och ställ in en volym som passar.</p>\n" +
        "");
}]);

angular.module("help/settings/weeks.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/settings/weeks.tpl.html",
        "<p>Välj om veckonummer ska visas i Kalendern eller inte. Du ser då även hur uppbokad en viss vecka är.</p>\n" +
        "");
}]);

angular.module("help/statistics.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/statistics.tpl.html",
        "<p>Vad har du gjort på sistone?</p>\n" +
        "\n" +
        "<p>Här ser du bland annat hur många aktiviteter som du gjort klart, planerat och skapat påminnelser till.</p>\n" +
        "");
}]);

angular.module("help/todo.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("help/todo.tpl.html",
        "<p>Här visas dina mest aktuella aktiviteter!</p>\n" +
        "<small>(I menyns Organisera alla aktiviteter finns alla)</small>\n" +
        "\n" +
        "<p>Skriv nya aktiviteter överst och tryck <i class=\"fa fa-plus-square purple\"></i>.</p>\n" +
        "\n" +
        "<p><b>Oplanerat</b> visar aktiviteter som behöver planeras. Håll listan kort: gör klart, radera, planera eller skapa en påminnelse!</p>\n" +
        "\n" +
        "<p><b>Att göra</b> visar din planering för idag/imorgon/veckan – välj själv! De med klockslag görs en exakt tid, övriga under den tidsperiod du ser i ljusgrått.</p>\n" +
        "\n" +
        "<p>Kryssa i <i class=\"fa fa-square-o gray\"></i> när en aktivitet är klar (flyttas till Arkiv), eller tryck på den och välj:</p>\n" +
        "<ul class=\"fa-ul\">\n" +
        "	<li><i class=\"fa fa-li fa-calendar gray\"></i>Planera: Bestäm t ex prio, tidpunkt, hur länge den visas i Att Göra listan.</li>\n" +
        " 	<li><i class=\"fa fa-li fa-crosshairs gray\"></i>Fokusera: Få hjälp att bara ägna dig åt aktiviteten en viss tid.</li>\n" +
        "	<li><span class=\"fa fa-li\"><span class=\"fa fa-stack-sm gray\"><i class=\"fa fa-plus fa-stack-half\"></i><i class=\"fa fa-bell-o fa-stack-1x\"></i></span></i></span>Påminn mm: Påminnelser och annat smart, t ex dela upp i mindre aktiviteter.</li>\n" +
        "    <li><i class=\"fa fa-li fa-trash-o gray\"></i>Radera: Ta bort aktiviter som inte behövs göras (flyttas till Arkiv).</li>\n" +
        "</ul>\n" +
        "<p>Finns <i class=\"fa fa-caret-right gray large\"></i> så tryck för att se underaktiviteter. Ljusgrå text över aktivitetsnamnet visar att den tillhör den andra aktiviteten.</p>\n" +
        "\n" +
        "<p><span class=\"alert\">27/6 15:00</span> visar och ändrar påminnelser.</p>\n" +
        "\n" +
        "<p>Mörkröd bakgrund visar att tiden för aktiviteten passerats.</p>\n" +
        "");
}]);

angular.module("kalender.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("kalender.tpl.html",
        "<div ida-calendar calendar-create=\"true\"  class=\"calendar-page date-picker\"></div>\n" +
        "<!-- calendar-validate=\"(tp.start <= time && tp.end > time)\" -->\n" +
        "");
}]);

angular.module("list_item.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("list_item.tpl.html",
        "<li class=\"list-item\">\n" +
        "  <div ng-class=\"{ 'checked': task.checked,\n" +
        "    'is-parent': task.isParent,\n" +
        "    'is-child': task.isChild,\n" +
        "    'finished': task.finished,\n" +
        "    'deleted': task.deleted,\n" +
        "    'show-children': task.showChildren,\n" +
        "    'expanded': task.expanded,\n" +
        "    'has-child-task-controls': !task.repeated && $root.page.indexOf('/organisera-alla-aktiviteter') === 0,\n" +
        "    'last-day': isLastDay(),\n" +
        "    'started': isStarted(),\n" +
        "    'warning': isWarning()}\">\n" +
        "\n" +
        "    <button class=\"caret\" ng-click=\"task.showChildren=!task.showChildren\"></button>\n" +
        "\n" +
        "    <div>\n" +
        "      <div class=\"sub-task-ctrls\">\n" +
        "        <button ng-show=\"!task.repeated\" class=\"make-sub-task\" ng-click=\"$root.setModal('modal.pick_parent_task.tpl.html', task.id).then($root.reload)\"></button>\n" +
        "        <button ng-show=\"!task.repeated\" ng-click=\"$parent.addTask(task.id)\" class=\"add-sub-task\"></button>\n" +
        "        <button ng-click=\"$root.$tasks.detachChild(task.id);$root.reload()\" class=\"make-free-task\"></button>\n" +
        "      </div>\n" +
        "\n" +
        "      <div class=\"right\">\n" +
        "        <div class=\"checkbox-wrapper\"\n" +
        "              ng-click=\"$root.completeTask(task)\"\n" +
        "              ng-hide=\"task.finished||task.deleted\">\n" +
        "          <div class=\"checkbox\"><i class=\"fa fa-check\" ng-show=\"task.checked\"></i></div>\n" +
        "        </div>\n" +
        "\n" +
        "        <div class=\"right\">\n" +
        "          <!-- <span class=\"icon\"></span> -->\n" +
        "          <span class=\"parent-task\">{{task.parent}}</span>\n" +
        "          <span class=\"alert\" ng-show=\"task.reminder\" ng-if=\"!task.finished&&!task.deleted\" ng-class=\"{'overdue':isOverdue()}\" ng-click=\"alertClick()\">{{alertLabel(task)}}</span>\n" +
        "\n" +
        "          <span class=\"task-text\"\n" +
        "                ng-click=\"task.expanded=!task.expanded\"\n" +
        "                ida-hold=\"newTaskTitle=task.title;$root.setModal('modal.edit_task_name.tpl.html', task.id);\">\n" +
        "            <span ng-show=\"task.planned\" class=\"prio\">{{durationLabel(task)}}</span>\n" +
        "            <span ng-bind=\"(task.timeType==='exact'&&task.planned?'('+priorityLabel(task)+')'+(task.repeated&&$parent.organize?' [uppr.]':'')+':':'')+task.title+' ('+task._section+')'\"></span>\n" +
        "          </span>\n" +
        "\n" +
        "          <span class=\"time-label\">{{$root.timeLabel(task)}}</span>\n" +
        "\n" +
        "          <div class=\"actions\">\n" +
        "            <button ng-hide=\"task.finished||task.deleted\"\n" +
        "                    ng-click=\"$root.editTask(task.id)\">\n" +
        "              <i class=\"fa fa-calendar\"></i>\n" +
        "              Planera\n" +
        "            </button>\n" +
        "            <button ng-hide=\"task.finished||task.deleted\"\n" +
        "                    ng-click=\"$parent.$parent.preventConfirmation = true; $root.focus(task.id)\">\n" +
        "              <i class=\"fa fa-crosshairs\"></i>\n" +
        "              Fokusera\n" +
        "            </button>\n" +
        "            <button ng-show=\"task.planned&&!task.finished&&!task.deleted\"\n" +
        "                    ng-click=\"$root.setModal('modal.later.tpl.html', task.id)\">\n" +
        "              <span class=\"fa-stack-sm\">\n" +
        "                <i class=\"fa fa-plus fa-stack-half\"></i>\n" +
        "                <i class=\"fa fa-bell-o fa-stack-1x\"></i>\n" +
        "              </span>\n" +
        "              Påminn mm\n" +
        "            </button>\n" +
        "            <button ng-hide=\"task.planned||task.finished||task.deleted\"\n" +
        "                    ng-click=\"$root.setModal('modal.timer.tpl.html', task.id).then($root.reload)\">\n" +
        "              <i class=\"fa fa-bell-o\"></i>\n" +
        "              Påminn\n" +
        "            </button>\n" +
        "            <button ng-hide=\"task.finished||task.deleted\"\n" +
        "                    ng-click=\"$root.setModal('modal.delete.tpl.html', task.id).then($root.getTodoList)\">\n" +
        "              <i class=\"fa fa-trash-o\"></i>\n" +
        "              Radera\n" +
        "            </button>\n" +
        "            <button ng-show=\"task.finished||task.deleted\" ng-click=\"$root.editTask(task.id);\">\n" +
        "              <i class=\"fa fa-level-up\"></i>\n" +
        "              Återställ <!-- Re-plan a task that is in the archive -->\n" +
        "            </button>\n" +
        "          </div>\n" +
        "        </div>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "\n" +
        "  <ul class=\"children\" ng-class=\"{'show': task.showChildren }\" ida-item-children=\"task\"></ul>\n" +
        "</li>\n" +
        "");
}]);

angular.module("modal.delete.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("modal.delete.tpl.html",
        "<div class=\"delete-task-modal\">\n" +
        "  <div>\n" +
        "    <button class=\"cancel\" ng-click=\"modal.$dismiss()\"><i class=\"fa fa-times\"></i></button>\n" +
        "\n" +
        "    <h1>Är du säker på att du vill radera aktiviteten?</h1>\n" +
        "\n" +
        "    <h2 class=\"modal-sub-heading\">\n" +
        "      <b ng-bind=\"(modal.task.important ? 'A' : 'B') + (modal.task.complex ? (modal.task.important ? 'A' : 'B') : '') + ':'\"></b>\n" +
        "      <span ng-bind=\"modal.task.title\"></span>\n" +
        "    </h2>\n" +
        "\n" +
        "    <div class=\"divider\"></div>\n" +
        "\n" +
        "    <button class=\"yes\" ng-disabled=\"modal.$lock\" ng-click=\"askForSubs(modal.task, modal)\">Ja, radera aktiviteten</button>\n" +
        "    <button class=\"yes\" ng-disabled=\"modal.$lock\" ng-show=\"modal.task.repeatTask\" ng-click=\"$tasks.delete(modal.task.id, true);modal.$close('all')\">Radera alla återkommande aktiviteter</button>\n" +
        "    <button class=\"no\" ng-disabled=\"modal.$lock\" ng-click=\"modal.$close()\">Avbryt</button>\n" +
        "\n" +
        "    <span>Raderade aktiviteter finns kvar på Arkiv-sidan.</span>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
}]);

angular.module("modal.edit_task_name.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("modal.edit_task_name.tpl.html",
        "<div ng-init=\"newTaskTitle = modal.task.title\" class=\"edit-task-name-modal\">\n" +
        "  <div>\n" +
        "    <button class=\"cancel\" ng-click=\"modal.$dismiss()\"><i class=\"fa fa-times\"></i></button>\n" +
        "\n" +
        "    <h1>Ändra aktivitetens text:</h1>\n" +
        "\n" +
        "    <div class=\"divider\"></div>\n" +
        "\n" +
        "    <textarea ng-model=\"newTaskTitle\"></textarea>\n" +
        "\n" +
        "    <button class=\"done\" ng-disabled=\"modal.$lock\" ng-click=\"modal.task.rename(newTaskTitle);modal.$close(true)\">Spara</button>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
}]);

angular.module("modal.focus.distraction_list_confirmation.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("modal.focus.distraction_list_confirmation.tpl.html",
        "<div class=\"focus-distraction-list-confirmation-modal\">\n" +
        "  <div>\n" +
        "    <h1>Du har fortfarande aktiviteter i distraktionslistan. Vill du planera dem nu eller senare?</h1>\n" +
        "    <button class=\"cancel\" ng-click=\"modal.$dismiss()\"><i class=\"fa fa-times\"></i></button>\n" +
        "    <div class=\"divider\"></div>\n" +
        "    <!-- Just close the modal: -->\n" +
        "    <button class=\"plan-now\" ng-disabled=\"modal.$lock\" ng-click=\"$root.timeLeft=0;$root.showFocusInputs=false;$root.showNav=false;modal.$close()\">Planera dem nu</button>\n" +
        "    <!-- Leave the focus page and go to the todo page: -->\n" +
        "    <button class=\"plan-later\" ng-disabled=\"modal.$lock\" ng-click=\"$root.loadFocusTime=null;$root.timeLeft = 0;modal.$close(true)\">Senare. Flytta dem till listan över oplanerade aktiviteter.</button>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
}]);

angular.module("modal.focus.stop_timer.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("modal.focus.stop_timer.tpl.html",
        "<div ng-init=\"haveDistractions = $tasks.distractionListTasks(loadFocusTime).length > 0\" class=\"focus-stop-timer-modal\">\n" +
        "  <div>\n" +
        "    <button class=\"cancel\" ng-click=\"modal.$dismiss()\"><i class=\"fa fa-times\"></i></button>\n" +
        "\n" +
        "    <div class=\"divider\"></div>\n" +
        "\n" +
        "    <!-- Clear the timer: -->\n" +
        "    <button class=\"reset-timer\" ng-disabled=\"modal.$lock\" ng-click=\"$parent.timeLeft = 0;modal.$close('stop')\">Ställ om timern</button>\n" +
        "\n" +
        "    <!-- If distraction list is empty, leave the focus page and go to the todo page: -->\n" +
        "    <!-- If distraction list is NOT empty, clear the timer and open up modal.focus.distraction_list_confirmation.html: -->\n" +
        "    <button ng-hide=\"haveDistractions\" ng-disabled=\"modal.$lock\" class=\"stop-focussing\"\n" +
        "      ng-click=\"$parent.timeLeft = 0;modal.$close('todo')\">\n" +
        "      Sluta fokusera\n" +
        "    </button>\n" +
        "\n" +
        "    <button ng-show=\"haveDistractions\" ng-disabled=\"modal.$lock\" class=\"stop-focussing\"\n" +
        "      ng-click=\"$parent.timeLeft = 0;$parent.showFocusInputs = false;modal.$close('dlist')\">\n" +
        "      Sluta fokusera och gå igenom distraktionslistan\n" +
        "    </button>\n" +
        "\n" +
        "    <!-- Just close the modal: -->\n" +
        "    <button class=\"continue-focussing\" ng-disabled=\"modal.$lock\" ng-click=\"modal.$dismiss()\">Fortsätt fokusera</button>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
}]);

angular.module("modal.later.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("modal.later.tpl.html",
        "<div class=\"later-modal\">\n" +
        "  <div>\n" +
        "    <button class=\"cancel\" ng-click=\"modal.$dismiss()\"><i class=\"fa fa-times\"></i></button>\n" +
        "\n" +
        "    <h1>Vad vill du göra med aktiviteten?</h1>\n" +
        "\n" +
        "    <h2 class=\"modal-sub-heading\">\n" +
        "      <b ng-bind=\"(modal.task.important ? 'A' : 'B') + (modal.task.complex ? (modal.task.important ? 'A' : 'B') : '') + ':'\"></b>\n" +
        "      <span ng-bind=\"modal.task.title\"></span>\n" +
        "      <span class=\"time-label\" ng-bind=\"\n" +
        "modal.task.timeType === 'none' ? 'Ingen tid (syns ej i Att-Göra)' : (\n" +
        "  modal.task.startTime && modal.task.planned ? (\n" +
        "    modal.task.timeType === 'period' ?\n" +
        "      moment(modal.task.startTime).format('D MMM') + ' - ' + moment(modal.task.endTime).format('D MMM') :\n" +
        "      moment(modal.task.startTime).format('D MMM')\n" +
        "  ) :\n" +
        "  ' '\n" +
        ")\"></span>\n" +
        "    </h2>\n" +
        "\n" +
        "    <div class=\"divider\"></div>\n" +
        "\n" +
        "    <div class=\"reminder-in\" ng-init=\"$hoursIn=0;$minutesIn=30;$now=moment(Date.now())\">\n" +
        "      <button class=\"reminder\" ng-disabled=\"modal.$lock\" ng-click=\"modal.task.reminderTime=Date.now();replan(modal.task, $now.hours()+$hoursIn, $now.minutes()+$minutesIn)\">Påminn om</button>\n" +
        "      <span>&nbsp;kl&nbsp;</span>\n" +
        "      <div ida-timepicker=\"duration\" model-minutes=\"$minutesIn\" model-hours=\"$hoursIn\"></div>\n" +
        "    </div>\n" +
        "    <div class=\"reminder-today\">\n" +
        "      <button class=\"reminder\" ng-disabled=\"modal.$lock\" ng-click=\"$root.setDatepicker('modal.pick_latertime.tpl.html', modal.$dismiss)\">Påminn viss tid</button>\n" +
        "    </div>\n" +
        "    <button class=\"breakdown\"\n" +
        "            ng-show=\"!modal.task.isChild\"\n" +
        "            ng-click=\"organizeTask(modal.task.id, modal)\">\n" +
        "      Dela upp i mindre uppgifter\n" +
        "    </button>\n" +
        "    <button class=\"postpone\" ng-disabled=\"modal.$lock\" ng-if=\"modal.task.timeType==='exact'&&Math.floor(Date.now()/86400000)>Math.floor(modal.task.startTime/86400000)-1\" ng-click=\"postpone(modal.task, 1);modal.$close('exact')\">Skjut upp till samma tid imorgon</button>\n" +
        "    <button class=\"postpone\" ng-disabled=\"modal.$lock\" ng-if=\"modal.task.timeType==='period'&&Math.floor(Date.now()/86400000)<Math.floor(modal.task.endTime/86400000)+1\" ng-click=\"postpone(modal.task, 1);modal.$close('period')\">Skjut upp start till imorgon</button>\n" +
        "\n" +
        "\n" +
        "<!-- \n" +
        "\n" +
        "    <div class=\"postpone\">\n" +
        "      <button ng-click=\"postpone(modal.task, daysToPostpone)\">Skjut upp start</button>\n" +
        "      <input type=\"number\" ng-init=\"daysToPostpone=3\" ng-model=\"daysToPostpone\">\n" +
        "      <span>dagar</span>\n" +
        "    </div>\n" +
        "    <span class=\"error\"\n" +
        "      ng-bind=\"Date.now() > (modal.task.endTime || modal.task.startTime) ? 'Slutdatumet är passerat' : 'Det är bara ' + Math.round(((modal.task.endTime || modal.task.startTime) - Date.now()) / 86400000) + ' dagar kvar till slutdatumet'\"></span>\n" +
        "    <button class=\"replan\">Planera om</button>\n" +
        "    <button class=\"breakdown\"\n" +
        "            ng-show=\"!modal.task.isChild\"\n" +
        "            ng-click=\"$location.path('/organisera-alla-aktiviteter/' + modal.task.id);setModal('');\">\n" +
        "      Dela upp i mindre uppgifter\n" +
        "    </button>\n" +
        "    <button ng-click=\"setModal('')\" class=\"cancel-2\">Avbryt</button>\n" +
        " -->  </div>\n" +
        "</div>\n" +
        "");
}]);

angular.module("modal.pick_endtime.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("modal.pick_endtime.tpl.html",
        "<div ida-calendar=\"modal.task.endTime\" calendar-validate=\"(!$root.modal.task.startTime || ($root.modal.task.startTime < tp.end))\" calendar-task=\"modal.task\" calendar-def=\"modal.task.endTime||modal.task.startTime\" class=\"calendar-page date-picker\">\n" +
        "  <div class=\"confirmation\">\n" +
        "  	<div><b>Vald Slutdag</b></div>\n" +
        "    <span ng-bind=\"(time ? $root.moment(time).format('ddd D MMM YYYY') : '')\"></span>\n" +
        "    <button ng-click=\"task.endTime=$root.moment(time).endOf('day').valueOf();$event.stopPropagation();$root.datepicker.$close(time, 100)\" ng-disabled=\"!time||modal.$lock\">Klar</button>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
}]);

angular.module("modal.pick_latertime.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("modal.pick_latertime.tpl.html",
        "<div ida-calendar=\"modal.task.reminderTime\" calendar-task=\"modal.task\" class=\"calendar-page date-picker\">\n" +
        "  <div class=\"confirmation\">\n" +
        "  	<div><b>Påminn om {{task.title}}</b></div>\n" +
        "    <span ng-bind=\"(time ? $root.moment(time).format('D MMMM YYYY') : '')\"></span>\n" +
        "    <div ida-timepicker model-minutes=\"$minutes\" model-hours=\"$hours\"></div>\n" +
        "    <div class=\"modal-buttons\">\n" +
        "	    <button ng-click=\"$root.datepicker.$close(time, 100)\">Ångra</button>\n" +
        "	    <button class=\"main\" ng-click=\"task.reminderTime=$root.moment(time).hours($hours||0).minutes($minutes||0).startOf('minute').valueOf();$root.replan(task,$hours||0,$minutes||0);$event.stopPropagation();$root.datepicker.$close(time, 100)\" ng-disabled=\"!time||modal.$lock\">Klar</button>\n" +
        "	</div>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
}]);

angular.module("modal.pick_parent_task.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("modal.pick_parent_task.tpl.html",
        "<div class=\"pick-parent-task-modal\">\n" +
        "  <button class=\"cancel\" ng-click=\"modal.$dismiss()\"><i class=\"fa fa-times\"></i></button>\n" +
        "\n" +
        "  <div class=\"child-task\">\n" +
        "    <h2>Underaktivitet:</h2>\n" +
        "    <p>\n" +
        "      <b ng-bind=\"(modal.task.important ? 'A' : 'B') + (modal.task.complex ? (modal.task.important ? 'A' : 'B') : '') + ':'\"></b>\n" +
        "      <span ng-bind=\"modal.task.title\"></span>\n" +
        "    </p>\n" +
        "    <i class=\"fa fa-long-arrow-down fa-2x\"></i>\n" +
        "  </div>\n" +
        "\n" +
        "  <h2>Välj huvudaktivitet till ovanstående underaktivitet</h2>\n" +
        "\n" +
        "  <ul>\n" +
        "    <li ng-repeat=\"task in $tasks.where({ deleted: false, finished: false, isChild: false, planned: true, repeated: false }) track by $index\"\n" +
        "        ng-if=\"task.id != modal.task.id\"\n" +
        "        ng-class=\"{ active: selected === task }\"\n" +
        "        ng-click=\"$parent.$parent.selected = task\">\n" +
        "      <b ng-bind=\"(task.important ? 'A' : 'B') + (task.complex ? (task.important ? 'A' : 'B') : '') + ':'\"></b>\n" +
        "      <span ng-bind=\"task.title\"></span> - <span class=\"gray\">{{timeLabel(task)}}</span>\n" +
        "    </li>\n" +
        "  </ul>\n" +
        "\n" +
        "  <div class=\"confirmation\">\n" +
        "    <button ng-disabled=\"!selected||modal.$lock\" ng-click=\"\n" +
        "      modal.task.expanded=false;\n" +
        "      modal.task.expanded = true;\n" +
        "      modal.task.isChild = true;\n" +
        "      modal.task.parent = selected.title;\n" +
        "      selected.isParent = true;\n" +
        "      selected.children.push(modal.task.id);\n" +
        "      $tasks.save();\n" +
        "      modal.$close(true)\">Klar</button>\n" +
        "  </div>\n" +
        "\n" +
        "</div>\n" +
        "");
}]);

angular.module("modal.pick_postponetime.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("modal.pick_postponetime.tpl.html",
        "<div ida-calendar=\"modal.task.reminderTime\" calendar-task=\"modal.task\" class=\"calendar-page date-picker\">\n" +
        "  <div class=\"confirmation\">\n" +
        "  	<div><b>Påminn om {{task.title}}</b></div>\n" +
        "    <span ng-bind=\"(time ? $root.moment(time).format('D MMMM YYYY') : '')\"></span>\n" +
        "    <div ida-timepicker model-minutes=\"$minutes\" model-hours=\"$hours\"></div>\n" +
        "    <div class=\"modal-buttons\">\n" +
        "	    <button ng-click=\"$root.datepicker.$close(time, 100);$root.setModal('modal.postpone.tpl.html',task)\">Ångra</button>\n" +
        "	    <button class=\"main\" ng-click=\"task.reminderTime=$root.moment(time).hours($hours||0).minutes($minutes||0).startOf('minute').valueOf();$root.replan(task,$hours||0,$minutes||0);$event.stopPropagation();$root.datepicker.$close(time, 100)\" ng-disabled=\"!time||modal.$lock\">Klar</button>\n" +
        "	</div>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
}]);

angular.module("modal.pick_remindertime.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("modal.pick_remindertime.tpl.html",
        "<div ida-calendar=\"modal.task.reminderTime\" calendar-task=\"modal.task\" class=\"calendar-page date-picker\">\n" +
        "  <div class=\"confirmation\">\n" +
        "  	<div><b>Tidpunkt för påminnelse</b></div>\n" +
        "    <span ng-bind=\"(time ? $root.moment(time).format('D MMMM YYYY, HH:mm') : '')\"></span>\n" +
        "    <button ng-click=\"task.reminderTime = $root.moment(time).hours($hours || 0).minutes($minutes || 0).startOf('minute').valueOf();$event.stopPropagation();$root.datepicker.$close(time, 100)\" ng-disabled=\"!time||modal.$lock\">Klar</button>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
}]);

angular.module("modal.pick_repeattime.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("modal.pick_repeattime.tpl.html",
        "<div ida-calendar=\"modal.task.repeatLimit\" calendar-task=\"modal.task\" class=\"calendar-page date-picker\">\n" +
        "  <div class=\"confirmation\" ng-init=\"timeHour=moment(time).hour()+1;timeMinute=0;\">\n" +
        "    <span ng-bind=\"(time ? $root.moment(time).format('D MMMM YYYY, HH:mm') : '')\"></span>\n" +
        "    <button ng-click=\"task.repeatLimit = $root.moment(time).hours(timeHour || 0).minutes(timeMinute || 0).startOf('minute').valueOf();$event.stopPropagation();$root.datepicker.$close(time, 100)\" ng-disabled=\"!time||modal.$lock\">Klar</button>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
}]);

angular.module("modal.pick_starttime.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("modal.pick_starttime.tpl.html",
        "<div ida-calendar=\"modal.task.startTime\" calendar-task=\"modal.task\" calendar-validate=\"$root.warnOverbook(tp.busyness >= 1)\" class=\"calendar-page date-picker\">\n" +
        "  <div class=\"confirmation\">\n" +
        "  	<div><b>Välj dag för {{$root.modal.task.title}}</b></div>\n" +
        "    <button ng-click=\"task.startTime=$root.moment(time).hours($hours || moment().add(1, 'hour').hours()).minutes($minutes || 0).seconds(0).millisecond(0).valueOf();$event.stopPropagation();$root.datepicker.$close(time, 100)\" ng-disabled=\"!time||modal.$lock\">Klar</button>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
}]);

angular.module("modal.pick_starttimeperiod.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("modal.pick_starttimeperiod.tpl.html",
        "<div ida-calendar=\"modal.task.startTime\" calendar-task=\"modal.task\" calendar-validate=\"(!$root.modal.task.endTime || ($root.modal.task.endTime > tp.start))\" calendar-def=\"modal.task.endTime\" class=\"calendar-page date-picker\">\n" +
        "  <div class=\"confirmation\">\n" +
        "  	<div><b>Vald Startdag</b></div>\n" +
        "    <span ng-bind=\"(time ? $root.moment(time).format('ddd D MMM YYYY') : '')\"></span>\n" +
        "    <button ng-click=\"task.startTime=$root.moment(time).startOf('day').valueOf();$event.stopPropagation();$root.datepicker.$close(time, 100)\" ng-disabled=\"!time||modal.$lock\">Klar</button>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
}]);

angular.module("modal.plan.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("modal.plan.tpl.html",
        "<div class=\"plan\" ng-class=\"{'help-hidden':!$config.help.plan}\">\n" +
        "  <h3 ng-if=\"!modal.task.parent\">Planera aktivitet</h3>\n" +
        "  <h3 ng-if=\"modal.task.parent\">Planera underaktivitet till {{modal.task.parent}}</h3>\n" +
        "  <button class=\"cancel\" ng-click=\"modal.task.cancel(page);modal.$dismiss()\"><i class=\"fa fa-times\"></i></button>\n" +
        "\n" +
        "  <input placeholder=\"Aktivitetens namn\" class=\"task-title\" type=\"text\" ng-model=\"modal.task.title\">\n" +
        "\n" +
        "  <br><br>\n" +
        "\n" +
        "  <div ida-help=\"help/plan/priority.tpl.html\" help-title=\"Aktivitetens prioritet och omfattning\" class=\"priority\"><!-- \n" +
        "     --><button ng-class=\"{ active: modal.task.complex == false && modal.task.important }\" ng-click=\"modal.task.complex=false;modal.task.important=true;\">A</button><!-- \n" +
        "     --><button ng-class=\"{ active: modal.task.complex && modal.task.important }\" ng-click=\"modal.task.complex=true;modal.task.important=true;\">AA</button><!-- \n" +
        "     --><button ng-class=\"{ active: modal.task.complex == false && !modal.task.important }\" ng-click=\"modal.task.complex=false;modal.task.important=false;\">B</button><!-- \n" +
        "     --><button ng-class=\"{ active: modal.task.complex && modal.task.important == false }\" ng-click=\"modal.task.complex=true;modal.task.important=false;\">BB</button></div>\n" +
        "\n" +
        "  <br>\n" +
        "\n" +
        "  <div ida-help=\"help/plan/type.tpl.html\" help-title=\"När ska aktiviteten göras?\" class=\"type\"><!-- \n" +
        "     --><button ng-class=\"{ active: modal.task.timeType == 'exact' }\" ng-click=\"modal.task.timeType='exact';modal.task.updatePeriodInput();\">Exakt tid</button><!-- \n" +
        "     --><button ng-class=\"{ active: modal.task.timeType == 'period' }\" ng-click=\"modal.task.timeType='period';modal.task.updatePeriodInput();\">Tidsperiod</button><!-- \n" +
        "     --><button ng-class=\"{ active: modal.task.timeType == 'none' }\" ng-click=\"modal.task.timeType='none'\">Ingen tid</button></div>\n" +
        "\n" +
        "  <br>\n" +
        "\n" +
        "  <div ida-help=\"help/plan/exact.tpl.html\" help-title=\"Välj datum och klockslag\" class=\"exact\" ng-if=\"modal.task.timeType==='exact'\">\n" +
        "    <button class=\"start-time\"\n" +
        "            ng-click=\"setDatepicker('modal.pick_starttime.tpl.html')\"\n" +
        "            ng-class=\"{'selected': modal.task.startTime}\"\n" +
        "            ng-bind=\"modal.task.startTime?'Börjar '+moment(modal.task.startTime).format('ddd D MMM YYYY'):'Välj datum och tid'\"></button>\n" +
        "    <span>&nbsp;kl&nbsp;</span>\n" +
        "    <div ida-timepicker model-date=\"modal.task.startTime\"></div>\n" +
        "  </div>\n" +
        "\n" +
        "  <div ida-help=\"help/plan/period.tpl.html\" help-title=\"Välj tidsperiod\" class=\"period\" ng-if=\"modal.task.timeType == 'period'\">\n" +
        "    <label>\n" +
        "      <select ng-change=\"modal.task.updatePeriodInput()\" ng-init=\"modal.task.timeInputType = modal.task.startTime ? 'exact':'today';modal.task.updatePeriodInput();\" ng-model=\"modal.task.timeInputType\">\n" +
        "        <option value=\"today\">Görs idag</option><!-- Today -->\n" +
        "        <option value=\"x-days\">Görs inom X dagar</option><!-- Within X days (shows input field below where you enter number of days) -->\n" +
        "        <option value=\"tomorrow\">Görs imorgon</option><!-- Tomorrow -->\n" +
        "        <option value=\"week\">Görs i veckan</option><!-- This week -->\n" +
        "        <option value=\"next-week\">Görs nästa vecka</option><!-- Next week -->\n" +
        "        <option value=\"month\">Görs denna månad</option><!-- This month -->\n" +
        "        <option value=\"next-month\">Görs nästa månad</option><!-- Next month -->\n" +
        "        <option value=\"three-months\">Görs inom tre månader</option><!-- Within three months -->\n" +
        "        <option value=\"exact\">Görs mellan exakta dagar</option><!-- Choose exact days -->\n" +
        "      </select>\n" +
        "    </label>\n" +
        "  </div>\n" +
        "\n" +
        "  <div class=\"within-x-days\" ng-if=\"modal.task.timeType == 'period' && modal.task.timeInputType == 'x-days'\">\n" +
        "    Inom <input ng-model=\"xDays\" type=\"number\" value=\"1\" placeholder=\"1\" min=\"1\" ng-change=\"modal.task.xDays=((!isNumber(xDays)||xDays<1)?(xDays=null):xDays);modal.task.updatePeriodInput();\"> dagar\n" +
        "  </div>\n" +
        "\n" +
        "  <div ida-help='hidden' class=\"period\" ng-if=\"modal.task.timeType==='period'\">\n" +
        "    <div class=\"datepickers\">\n" +
        "      <button ng-click=\"setDatepicker('modal.pick_starttimeperiod.tpl.html');modal.task.timeInputType='exact'\"\n" +
        "              ng-class=\"{ 'selected': modal.task.startTime }\"\n" +
        "              ng-bind=\"modal.task.startTime ? 'Från '+moment(modal.task.startTime).format('ddd D MMM YYYY') : 'Välj från datum'\"></button>\n" +
        "\n" +
        "      <button ng-click=\"setDatepicker('modal.pick_endtime.tpl.html');modal.task.timeInputType='exact'\"\n" +
        "              ng-class=\"{ 'selected': modal.task.endTime }\"\n" +
        "              ng-bind=\"modal.task.endTime ? 'Till '+moment(modal.task.endTime).format('ddd D MMM YYYY') : 'Välj till datum'\"></button>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "\n" +
        "  <br>\n" +
        "\n" +
        "  <div ng-show=\"modal.task.timeType == 'exact' || modal.task.timeType == 'period'\">\n" +
        "    <div ida-help=\"help/plan/duration.tpl.html\" help-title=\"Hur lång tid tar aktiviten att göra?\" class=\"duration\">\n" +
        "      <div ng-init=\"$parent.hours=isNumber(modal.task.duration)?Math.floor(modal.task.duration/3600000):null;$parent.minutes=isNumber(modal.task.duration)?Math.floor((modal.task.duration%3600000)/60000):null;\">\n" +
        "        <div class=\"estimate-toggle\" ng-click=\"modal.task.timeEstimated=!modal.task.timeEstimated\">\n" +
        "          <button ng-class=\"{ active: !modal.task.timeEstimated }\">\n" +
        "            Tar exakt\n" +
        "          </button>\n" +
        "          <button ng-class=\"{ active: modal.task.timeEstimated }\">\n" +
        "            Tar cirka\n" +
        "          </button>\n" +
        "        </div>\n" +
        "        <span>&nbsp;kl&nbsp;</span>\n" +
        "        <div ida-timepicker=\"duration\" model-hours=\"$parent.hours\" model-minutes=\"$parent.minutes\" minutes-default=\"30\" focus-field='$parent.focused'></div>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "\n" +
        "  <br>\n" +
        "\n" +
        "  <div ng-if=\"modal.task.timeType=='exact'\">\n" +
        "    <div ida-help=\"help/plan/ereminder.tpl.html\" help-title=\"Påminnelse\" class=\"reminder\">\n" +
        "      <label>\n" +
        "        <select ng-model=\"modal.task.reminderTimeAdvance\"\n" +
        "                ng-init=\"modal.task.reminderTimeAdvance=modal.task.reminderTimeAdvance||'-1'\">\n" +
        "          <option value=\"-1\">Ingen påminnelse</option>\n" +
        "          <option value=\"1\">Påminn vid start</option>\n" +
        "          <option value=\"300000\">Påminn 5 minuter innan</option>\n" +
        "          <option value=\"900000\">Påminn 15 minuter innan</option>\n" +
        "          <option value=\"1800000\">Påminn 30 minuter innan</option>\n" +
        "          <option value=\"3600000\">Påminn 1 timme innan</option>\n" +
        "          <option value=\"7200000\">Påminn 2 timmar innan</option>\n" +
        "          <option value=\"86400000\">Påminn 1 dag innan</option>\n" +
        "          <option value=\"172800000\">Påminn 2 dagar innan</option>\n" +
        "          <option value=\"604800000\">Påminn 1 vecka innan</option>\n" +
        "          <option ng-if=\"modal.task.repeatPeriod==='once'\" value=\"0\">Påminn exakt tid</option>\n" +
        "        </select>\n" +
        "      </label>\n" +
        "    </div>\n" +
        "    <div ida-help=\"hidden\" class=\"reminder\" ng-if=\"modal.task.reminderTimeAdvance==0\">\n" +
        "      <div class=\"reminder-time\" ng-if=\"modal.task.reminderTimeAdvance==0\" ng-init=\"modal.task.reminderTime=modal.task.reminderTime||Date.now()\">\n" +
        "        <button class=\"exact-reminder\" ng-if=\"modal.task.reminderTimeAdvance==0\"\n" +
        "              ng-click=\"setDatepicker('modal.pick_remindertime.tpl.html')\"\n" +
        "              ng-class=\"{'selected':modal.task.reminderTime}\"\n" +
        "              ng-bind=\"modal.task.reminderTime?moment(modal.task.reminderTime).format('D MMMM YYYY'):'Välj datum och tid'\"></button>\n" +
        "        <span>&nbsp;kl&nbsp;</span>\n" +
        "        <div ida-timepicker model-date=\"modal.task.reminderTime\"></div>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "    <div ida-help=\"hidden\" ng-if=\"modal.task.reminderTimeAdvance!=='-1'\" class=\"alarm-toggle\" ng-click=\"modal.task.shortSignal=!modal.task.shortSignal\">\n" +
        "      <button ng-class=\"{ active: modal.task.shortSignal }\">Kort signal</button>\n" +
        "      <button ng-class=\"{ active: !modal.task.shortSignal }\">Långt alarm</button>\n" +
        "    </div>\n" +
        "\n" +
        "    <br ng-hide=\"modal.task.isParent||modal.task.isChild\">\n" +
        "\n" +
        "    <div ng-hide=\"modal.task.isParent||modal.task.isChild\" ida-help=\"help/plan/repeat.tpl.html\" help-title=\"Återkommande aktiviteter\" class=\"repeated\" ng-init=\"modal.task.repeatPeriod = modal.task.repeatPeriod || 'once'\">\n" +
        "      <label>\n" +
        "        <select ng-model=\"modal.task.repeatPeriod\" ng-change=\"(modal.task.repeatPeriod!=='once'&&modal.task.reminderTimeAdvance==0)?(modal.task.reminderTimeAdvance='-1'):0\">\n" +
        "          <option value=\"once\">Upprepas inte</option>\n" +
        "          <option value=\"daily\">Upprepa var x:e dag</option>\n" +
        "          <option value=\"weekly\">Upprepa vissa veckodagar</option>\n" +
        "          <option value=\"monthly\">Upprepa månadsvis</option>\n" +
        "          <option value=\"yearly\">Upprepa årsvis</option>\n" +
        "        </select>\n" +
        "      </label>\n" +
        "    </div>\n" +
        "    <div ida-help=\"hidden\" class=\"repeated\" ng-if=\"modal.task.repeatPeriod!='once'\">\n" +
        "      <div ng-if=\"modal.task.repeatPeriod!='weekly'\">\n" +
        "        <span>Upprepa var</span>\n" +
        "        <input class=\"period-input\" ng-init=\"repeatLength=modal.task.repeatLength||null;modal.task.repeatLength=modal.task.repeatLength||1\"\n" +
        "              ng-change=\"console.log(repeatLength);repeatLength=(isNumber(repeatLength)&&repeatLength<1?null:repeatLength||null);modal.task.repeatLength=repeatLength||1\"\n" +
        "              ng-model=\"repeatLength\"\n" +
        "              type=\"number\" placeholder=\"1\" min=\"1\">\n" +
        "        <span ng-if=\"modal.task.repeatPeriod=='daily'\">Dag</span>\n" +
        "        <span ng-if=\"modal.task.repeatPeriod=='weekly'\">Veck</span>\n" +
        "        <span ng-if=\"modal.task.repeatPeriod=='monthly'\">Månad</span>\n" +
        "        <span ng-if=\"modal.task.repeatPeriod=='yearly'\">År</span>\n" +
        "        <br>\n" +
        "      </div>\n" +
        "      <div class=\"weekly-repeat\" ng-if=\"modal.task.repeatPeriod == 'weekly'\">\n" +
        "        <div ng-click=\"modal.task.checkDay(1)\">\n" +
        "          <div class=\"checkbox\"><i class=\"fa fa-check\" ng-if=\"modal.task.repeatDays.indexOf(1) !== -1\"></i></div> M\n" +
        "        </div>\n" +
        "        <div ng-click=\"modal.task.checkDay(2)\">\n" +
        "          <div class=\"checkbox\"><i class=\"fa fa-check\" ng-if=\"modal.task.repeatDays.indexOf(2) !== -1\"></i></div> T\n" +
        "        </div>\n" +
        "        <div ng-click=\"modal.task.checkDay(3)\">\n" +
        "          <div class=\"checkbox\"><i class=\"fa fa-check\" ng-if=\"modal.task.repeatDays.indexOf(3) !== -1\"></i></div> O\n" +
        "        </div>\n" +
        "        <div ng-click=\"modal.task.checkDay(4)\">\n" +
        "          <div class=\"checkbox\"><i class=\"fa fa-check\" ng-if=\"modal.task.repeatDays.indexOf(4) !== -1\"></i></div> T\n" +
        "        </div>\n" +
        "        <div ng-click=\"modal.task.checkDay(5)\">\n" +
        "          <div class=\"checkbox\"><i class=\"fa fa-check\" ng-if=\"modal.task.repeatDays.indexOf(5) !== -1\"></i></div> F\n" +
        "        </div>\n" +
        "        <div ng-click=\"modal.task.checkDay(6)\">\n" +
        "          <div class=\"checkbox\"><i class=\"fa fa-check\" ng-if=\"modal.task.repeatDays.indexOf(6) !== -1\"></i></div> L\n" +
        "        </div>\n" +
        "        <div ng-click=\"modal.task.checkDay(0)\">\n" +
        "          <div class=\"checkbox\"><i class=\"fa fa-check\" ng-if=\"modal.task.repeatDays.indexOf(0) !== -1\"></i></div> S\n" +
        "        </div>\n" +
        "      </div>\n" +
        "      <div ng-if=\"modal.task.repeatPeriod!=='once'\" ng-init=\"modal.task.repeatType=modal.task.repeatType||'week'\">\n" +
        "        <label class=\"repeat-end\">\n" +
        "          <select ng-model=\"modal.task.repeatType\"\n" +
        "                  ng-change=\"\">\n" +
        "            <option value=\"week\">Upprepa under 1 vecka</option>\n" +
        "            <option value=\"month\">Upprepa under en månad</option>\n" +
        "            <option value=\"year\">Upprepa under ett år</option>\n" +
        "            <option value=\"date\">Upprepa till en viss dag</option>\n" +
        "          </select>\n" +
        "        </label>\n" +
        "        <div class=\"repeat-time\" ng-if=\"modal.task.repeatType==='date'\">\n" +
        "          <button class=\"repeat-limit\"\n" +
        "                ng-click=\"setDatepicker('modal.pick_repeattime.tpl.html')\"\n" +
        "                ng-class=\"{'selected':modal.task.repeatLimit}\"\n" +
        "                ng-bind=\"modal.task.repeatLimit?moment(modal.task.repeatLimit).format('D MMMM YYYY'):'Välj datum'\"></button>\n" +
        "        </div>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "\n" +
        "  <div ng-if=\"modal.task.timeType=='period'&&modal.task.startTime&&modal.task.endTime\">\n" +
        "    <div ida-help=\"help/plan/preminder.tpl.html\" help-title=\"Påminnelse för tidsperioder\" class=\"period-reminder\">\n" +
        "      <label class=\"reminder\">\n" +
        "        <select ng-model=\"modal.task.reminderTimePeriod\"\n" +
        "                ng-change=\"modal.task.reminderTime = modal.task.setReminderTime()\"\n" +
        "                ng-init=\"modal.task.reminderTimePeriod = modal.task.reminderTimePeriod || (modal.task.reminderTime ? 'firstDay' : 'none')\">\n" +
        "          <option value=\"none\">Ingen påminnelse</option>\n" +
        "          <option value=\"firstDay\">Påminn första dagen</option>\n" +
        "          <option value=\"nearFirst\">Påminn nära början</option>\n" +
        "          <option value=\"middle\">Påminn i mitten</option>\n" +
        "          <option value=\"nearLast\">Påminn nära slutet</option>\n" +
        "          <option value=\"lastDay\">Påminn sista dagen</option>\n" +
        "          <option value=\"exact\">Påminn exakt tid</option>\n" +
        "        </select>\n" +
        "      </label>\n" +
        "      <div class=\"reminder-time\" ng-init=\"modal.task.reminderTime = modal.task.reminderTime || Date.now()\" ng-hide=\"modal.task.reminderTimePeriod==='none'\">\n" +
        "        <button class=\"exact-reminder\"\n" +
        "              ng-click=\"setDatepicker('modal.pick_remindertime.tpl.html');modal.task.reminderTimePeriod='exact'\"\n" +
        "              ng-class=\"{ 'selected': modal.task.reminderTime }\"\n" +
        "              ng-bind=\"modal.task.reminderTime ? moment(modal.task.reminderTime).format('D MMMM YYYY') : 'Välj datum och tid'\"></button>\n" +
        "        <span>&nbsp;kl&nbsp;</span>\n" +
        "        <div ida-timepicker model-date=\"modal.task.reminderTime\"></div>\n" +
        "      </div>\n" +
        "      <div ng-if=\"modal.task.reminderTimePeriod!='none'\" class=\"alarm-toggle\" ng-click=\"modal.task.shortSignal=!modal.task.shortSignal\">\n" +
        "        <button ng-class=\"{ active: modal.task.shortSignal }\">Kort signal</button>\n" +
        "        <button ng-class=\"{ active: !modal.task.shortSignal }\">Långt alarm</button>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "\n" +
        "  <br>\n" +
        "\n" +
        "  <div ng-if=\"modal.task.timeType == 'exact'\">\n" +
        "    <label ida-help=\"help/plan/eremove.tpl.html\" help-title=\"Flytta aktivitet från Att-Göra-listan\" class=\"show-in-todo\">\n" +
        "      <select ng-model=\"modal.task.showInTodo\">\n" +
        "        <option value=\"until marked as done\">Bort när Klar</option>\n" +
        "        <!-- <option value=\"until start time\">Bort vid starttid</option> -->\n" +
        "        <option value=\"until end time\">Bort vid sluttid</option>\n" +
        "        <option value=\"auto complete\">Auto-klar vid sluttid</option>\n" +
        "        <option value=\"never\">Syns ej på Att-Göra</option>\n" +
        "      </select>\n" +
        "    </label>\n" +
        "  </div>\n" +
        "\n" +
        "  <div ng-if=\"modal.task.timeType == 'period'\">\n" +
        "    <label ida-help=\"help/plan/premove.tpl.html\" help-title=\"Flytta aktivitet från Att-Göra-listan\" class=\"show-in-todo\">\n" +
        "      <select ng-model=\"modal.task.showInTodo\">\n" +
        "        <option value=\"until marked as done\">Bort när Klar</option>\n" +
        "        <option value=\"until end time\">Bort efter tidsperioden</option>\n" +
        "        <option value=\"auto complete\">Autoklar efter tidsperioden</option>\n" +
        "      </select>\n" +
        "    </label>\n" +
        "  </div>\n" +
        "\n" +
        "  <br>\n" +
        "\n" +
        "  <div ng-if=\"\n" +
        "    (modal.task.title) &&\n" +
        "    (modal.task.important == true || modal.task.important == false) &&\n" +
        "    (modal.task.complex == true || modal.task.complex == false) &&\n" +
        "    (modal.task.repeatPeriod === 'once' || modal.task.repeatType !=='date' || modal.task.repeatLimit) &&\n" +
        "    (\n" +
        "      (modal.task.timeType == 'exact'&& modal.task.startTime) ||\n" +
        "      (modal.task.timeType == 'period'&& modal.task.startTime && modal.task.endTime) ||\n" +
        "      (modal.task.timeType == 'none')\n" +
        "    )\">\n" +
        "    <button class=\"save\" ng-disabled=\"modal.$lock\" ng-click=\"modal.$close({hours: hours, minutes: minutes, focused: focused}, 100)\">Spara</button>\n" +
        "  </div>\n" +
        "\n" +
        "</div>\n" +
        "");
}]);

angular.module("modal.postpone.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("modal.postpone.tpl.html",
        "<div class=\"later-modal\">\n" +
        "  <div>\n" +
        "    <button class=\"cancel\" ng-click=\"modal.$dismiss()\"><i class=\"fa fa-times\"></i></button>\n" +
        "\n" +
        "    <h1>Vad vill du göra med aktiviteten?</h1>\n" +
        "\n" +
        "    <h2 class=\"modal-sub-heading\">\n" +
        "      <b ng-bind=\"(modal.task.important ? 'A' : 'B') + (modal.task.complex ? (modal.task.important ? 'A' : 'B') : '') + ':'\"></b>\n" +
        "      <span ng-bind=\"modal.task.title\"></span>\n" +
        "      <span class=\"time-label\" ng-bind=\"\n" +
        "modal.task.timeType === 'none' ? 'Ingen tid (syns ej i Att-Göra)' : (\n" +
        "  modal.task.startTime && modal.task.planned ? (\n" +
        "    modal.task.timeType === 'period' ?\n" +
        "      moment(modal.task.startTime).format('D MMM') + ' - ' + moment(modal.task.endTime).format('D MMM') :\n" +
        "      moment(modal.task.startTime).format('D MMM')\n" +
        "  ) :\n" +
        "  ' '\n" +
        ")\"></span>\n" +
        "    </h2>\n" +
        "\n" +
        "    <div class=\"divider\"></div>\n" +
        "\n" +
        "    <div class=\"reminder-in\" ng-init=\"$hoursIn=0;$minutesIn=30;$now=moment(Date.now())\">\n" +
        "      <button class=\"reminder\" ng-disabled=\"modal.$lock\" ng-click=\"modal.task.reminderTime=Date.now();replan(modal.task, $now.hours()+$hoursIn, $now.minutes()+$minutesIn)\">Påminn om</button>\n" +
        "      <span>&nbsp;kl&nbsp;</span>\n" +
        "      <div ida-timepicker=\"duration\" model-minutes=\"$minutesIn\" model-hours=\"$hoursIn\"></div>\n" +
        "    </div>\n" +
        "    <div class=\"reminder-today\">\n" +
        "      <button class=\"reminder\" ng-disabled=\"modal.$lock\" ng-click=\"$root.setDatepicker('modal.pick_postponetime.tpl.html', modal.$dismiss)\">Påminn viss tid</button>\n" +
        "    </div>\n" +
        "    <button class=\"postpone\" ng-if=\"modal.task.timeType==='exact'&&Math.floor(Date.now()/86400000)>Math.floor(modal.task.startTime/86400000)-1\" ng-disabled=\"modal.$lock\" ng-click=\"postpone(modal.task, 1);modal.$close('exact')\">Skjut upp till samma tid imorgon</button>\n" +
        "    <button class=\"postpone\" ng-if=\"modal.task.timeType==='period'&&Math.floor(Date.now()/86400000)<Math.floor(modal.task.endTime/86400000)+1\" ng-disabled=\"modal.$lock\" ng-click=\"postpone(modal.task, 1);modal.$close('period')\">Skjut upp start till imorgon</button>\n" +
        "    <button class=\"abort\" ng-click=\"modal.task.reminder=false;modal.$close('cancel')\">Ta bort påminnelse</button>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
}]);

angular.module("modal.timer.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("modal.timer.tpl.html",
        "<div class=\"timer-modal\">\n" +
        "  <div>\n" +
        "    <button class=\"cancel\" ng-click=\"modal.$dismiss()\"><i class=\"fa fa-times\"></i></button>\n" +
        "\n" +
        "    <h1>När vill du bli påmind?</h1>\n" +
        "\n" +
        "    <h2 class=\"modal-sub-heading\">\n" +
        "      <span>{{modal.task.title}}</span>\n" +
        "    </h2>\n" +
        "\n" +
        "    <div class=\"divider\"></div>\n" +
        "\n" +
        "    <div ng-hide=\"modal.task.reminderTime > Date.now()\">\n" +
        "      <div class=\"time-inputs\" ng-init=\"$root.$timerType='period'\">\n" +
        "        <label class=\"time-options\">\n" +
        "          <select ng-model=\"$root.$timerType\">\n" +
        "            <option value=\"period\">Påminn om</option>\n" +
        "            <option value=\"today\">Idag klockan</option>\n" +
        "            <option value=\"other\">Påminn imorgon eller senare</option>\n" +
        "          </select>\n" +
        "        </label>\n" +
        "        <div class=\"time-picker\" ida-timepicker=\"duration\" model-hours=\"$root.$timerHours\" model-minutes=\"$root.$timerMinutes\" ng-if=\"$root.$timerType==='period'\" ng-init=\"$root.$timerHours=0;$root.$timerMinutes=30;\"></div>\n" +
        "        <div class=\"time-picker\" ida-timepicker model-hours=\"$root.$timerHours\" model-minutes=\"$root.$timerMinutes\" ng-if=\"$root.$timerType==='today'\" ng-init=\"$root.$timerHours=moment().add(1, 'hour').hours();$root.$timerMinutes=0;\"></div>\n" +
        "      </div>\n" +
        "      <br>\n" +
        "      <button class=\"start\" ng-disabled=\"modal.$lock\" ng-click=\"($root.$timerType==='period'?modal.task.setTimer(moment().add($root.$timerMinutes||30,'minutes').add($root.$timerHours||0,'hours').startOf('second').valueOf(), true):modal.task.setTimer(moment().hour($root.$timerHours).minute($root.$timerMinutes).startOf('minute').valueOf()));modal.$close('start');\">Starta</button>\n" +
        "      <button ng-if=\"modal.task.reminder\" class=\"clear\" ng-disabled=\"modal.$lock\" ng-click=\"modal.task.setTimer();$tasks.save();modal.$close('remove');\">Stäng av påminnelse</button>\n" +
        "    </div>\n" +
        "\n" +
        "    <div ng-show=\"!modal.$lock&&modal.task.reminderTime>Date.now()\" class=\"timer\">\n" +
        "      <div>{{modal.task.timer?modal.task.timeRemaining:moment(task.reminderTime).format('HH:mm')}}</div>\n" +
        "      <div class=\"buttons\">\n" +
        "        <button class=\"clear\" ng-disabled=\"modal.$lock\" ng-click=\"modal.task.setTimer();$tasks.save();modal.$close('remove');\">Ta bort</button>\n" +
        "        <button class=\"clear\" ng-click=\"modal.task.setTimer();$tasks.save();\">Ändra tid</button>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
}]);

angular.module("organize.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("organize.tpl.html",
        "<div ng-class=\"{breakdown:!!breakdown}\" class=\"todo-page organize-page\">\n" +
        "  <form ng-if=\"!breakdown\" class=\"add-task\">\n" +
        "    <div><input ng-model=\"$parent.newTask\" placeholder=\"Skapa ny aktivitet...\"></div>\n" +
        "    <button ng-click=\"addTask()\"><i class=\"fa fa-plus\"></i></button>\n" +
        "  </form>\n" +
        "\n" +
        "  <div class=\"controls\" ng-if=\"!breakdown\">\n" +
        "    <div class=\"sort\">\n" +
        "      <div>sortera</div>\n" +
        "      <label><select ng-init=\"$parent.sorting = ($root.currentSort || '+startTime')\" ng-model=\"$parent.sorting\">\n" +
        "        <option value=\"+startTime\">starttid</option>\n" +
        "        <option value=\"+endTime\">sluttid</option>\n" +
        "        <option value=\"-updated\">senast uppdaterad</option>\n" +
        "        <option value=\"-important\">prioritet</option>\n" +
        "        <option value=\"+title\">alfabetiskt</option>\n" +
        "        <option value=\"-duration\">storlek</option>\n" +
        "      </select></label>\n" +
        "    </div>\n" +
        "    <div class=\"expand-collapse\" ng-show=\"children\">\n" +
        "      <div>fäll ut/ihop</div>\n" +
        "      <button ng-click=\"showChildren(true)\"><i class=\"fa fa-caret-square-o-down\"></i></button>\n" +
        "      <button ng-click=\"showChildren(false)\"><i class=\"fa fa-caret-square-o-up\"></i></button>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <div class=\"controls\" ng-if=\"!!breakdown\">Skapa en underaktivitet genom att trycka på <i class=\"fa fa-plus-square-o gray\"></i></div>\n" +
        "\n" +
        "  <ul class=\"todo-list\">\n" +
        "    <li ng-if=\"!breakdown\" class=\"list-item\"\n" +
        "        ng-repeat=\"task in filter() | orderBy:[sorting == '+endTime' ? sortEndtime : sorting, '-complex'] | limitTo:20 track by $index\"\n" +
        "        ida-item=\"task\"></li>\n" +
        "    <li ng-if=\"!!breakdown\" class=\"list-item\" ida-item=\"breakdown\"></li>\n" +
        "  </ul>\n" +
        "\n" +
        "  <div ng-if=\"!!breakdown\" class=\"confirmation\">\n" +
        "    <button ng-click=\"$location.path('/todo')\">Klar</button>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
}]);

angular.module("settings.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("settings.tpl.html",
        "<div class=\"settings-page\" ng-class=\"{'help-hidden':!$config.help.setting}\">\n" +
        "  <div ida-help=\"help/settings/ball.tpl.html\" help-title=\"Ökning av bollarnas och staplarnas storlek\">\n" +
        "    <label class=\"range-label\">Hur snabbt blir en dag överbokad?</label>\n" +
        "    <div class=\"range range-purple\" ng-init=\"percentageUsableTime=1-$config.percentageUsableTime\">\n" +
        "      <i class=\"icon fa fa-paper-plane-o gray icon-small\"></i>\n" +
        "      <input type=\"range\", min=\"0.4\" max=\"0.9\" step=\"0.1\" ng-model=\"percentageUsableTime\" ng-change=\"$config.percentageUsableTime=1-percentageUsableTime;$config.save()\">\n" +
        "      <i class=\"icon fa fa-rocket gray icon-small\"></i>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <div ida-help=\"help/settings/slope.tpl.html\" help-title=\"Större boll mot slutet av period\">\n" +
        "    <label class=\"range-label\">Större boll mot slutet av period</label>\n" +
        "    <div class=\"range range-purple\">\n" +
        "      <i class=\"icon fa fa-circle gray icon-tiny\"></i>\n" +
        "      <input type=\"range\", min=\"0\" max=\"1\" step=\"0.1\" ng-model=\"$config.slope\" ng-change=\"$config.save()\">\n" +
        "      <i class=\"icon fa fa-circle gray\"></i>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <div ida-help=\"help/settings/weeks.tpl.html\" help-title=\"Visa veckonummer\">\n" +
        "    <div class=\"toggle-item\">\n" +
        "      <span class=\"toggle-label\">Visa veckonummer i kalendern</span>\n" +
        "      <span class=\"toggle-group\">\n" +
        "        <span class=\"toggle-off\">Av</span>\n" +
        "        <label class=\"toggle\">\n" +
        "          <input type=\"checkbox\" ng-model=\"$config.showWeeks\" ng-change=\"$config.save()\">\n" +
        "          <div class=\"track\">\n" +
        "            <div class=\"handle\"></div>\n" +
        "          </div>\n" +
        "        </label>\n" +
        "        <span class=\"toggle-on\">På</span>\n" +
        "      </span>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <div ida-help=\"help/settings/clean.tpl.html\" help-title=\"Påminnelse om att rensa aktiviteter\">\n" +
        "    <div class=\"select-item\">\n" +
        "      <span class=\"select-label\">Bli påmind om att rensa/planera</span>\n" +
        "      <label for=\"clean\" ng-class=\"{disabled:!$config.organize}\">\n" +
        "        <select id=\"clean\" ng-model=\"$config.organize\">\n" +
        "          <option value='day'>Varje dag</option>\n" +
        "          <option value='week'>Varje vecka</option>\n" +
        "          <option value='twoweek'>Varannan vecka</option>\n" +
        "          <option value=\"month\">Varje månad</option>\n" +
        "          <option value=\"\">Aldrig</option>\n" +
        "        </select>\n" +
        "      </label>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "\n" +
        "  <div class=\"separator\">Ljudinställningar</div>\n" +
        "\n" +
        "  <div ida-help=\"help/settings/slong.tpl.html\" help-title=\"Vad är Långt alarm?\"><div ida-sound=\"Långt alarm\" sound-type=\"long\" sound-set=\"clockalarm,clockalarm1,alarm-clock-electric\"></div></div>\n" +
        "  <div ida-help=\"help/settings/sshort.tpl.html\" help-title=\"Vad är Kort signal?\"><div ida-sound=\"Kort signal\" sound-type=\"short\" sound-set=\"little-bells,monotone-ascending,boxing-fight\"></div></div>\n" +
        "  <div ida-help=\"help/settings/sfocus.tpl.html\" help-title=\"Alarm för Fokuserings-timern\"><div ida-sound=\"Timer i Fokusera på\" sound-type=\"focus\" sound-set=\"clockalarm,clockalarm1,alarm-clock-electric\"></div></div>\n" +
        "  <div ida-help=\"help/settings/sdone.tpl.html\" help-title=\"Ljud för klar aktivtet\"><div ida-sound=\"Aktivitet klar\" sound-type=\"task\" sound-set=\"tada,applaud,bell-victory\"></div></div>\n" +
        "\n" +
        "<!--   <div ida-help><div ida-sound=\"Timer\" sound-type=\"timer\" sound-set=\"clockalarm,clockalarm1,alarm-clock-electric\"></div></div>\n" +
        "  <div ida-help><div ida-sound=\"Reminder\" sound-type=\"reminder\" sound-set=\"little-bells,boxing-fight,monotone-ascending\"></div></div>\n" +
        "  <div ida-help><div ida-sound=\"Archive\" sound-type=\"archive\" sound-set=\"applaud,bell-victory\"></div></div>\n" +
        " -->\n" +
        "  <div class=\"separator\">Visa hjälptexter</div>\n" +
        "\n" +
        "  <div ida-help=\"help/settings/nav.tpl.html\" help-title=\"Hjälptexter i huvudmenyn\">\n" +
        "    <div class=\"toggle-item\">\n" +
        "      <span class=\"toggle-label\">I huvudmenyn</span>\n" +
        "      <span class=\"toggle-group\">\n" +
        "        <span class=\"toggle-off\">Av</span>\n" +
        "        <label class=\"toggle\">\n" +
        "          <input type=\"checkbox\" ng-model=\"$config.help.nav\" ng-change=\"$config.save()\">\n" +
        "          <div class=\"track\">\n" +
        "            <div class=\"handle\"></div>\n" +
        "          </div>\n" +
        "        </label>\n" +
        "        <span class=\"toggle-on\">På</span>\n" +
        "      </span>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <div ida-help=\"help/settings/plan.tpl.html\" help-title=\"Hjälptexter i planeringsvyn\">\n" +
        "    <div class=\"toggle-item\">\n" +
        "      <span class=\"toggle-label\">När planerar aktivitet</span>\n" +
        "      <span class=\"toggle-group\">\n" +
        "        <span class=\"toggle-off\">Av</span>\n" +
        "        <label class=\"toggle\">\n" +
        "           <input type=\"checkbox\" ng-model=\"$config.help.plan\" ng-change=\"$config.save()\">\n" +
        "           <div class=\"track\">\n" +
        "             <div class=\"handle\"></div>\n" +
        "           </div>\n" +
        "        </label>\n" +
        "        <span class=\"toggle-on\">På</span>\n" +
        "      </span>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <div ida-help=\"help/settings/settings.tpl.html\" help-title=\"Hjälptexter i denna vy för inställningar\">\n" +
        "    <div class=\"toggle-item\">\n" +
        "      <span class=\"toggle-label\">I inställningar</span>\n" +
        "      <span class=\"toggle-group\">\n" +
        "        <span class=\"toggle-off\">Av</span>\n" +
        "        <label class=\"toggle\">\n" +
        "           <input type=\"checkbox\" ng-model=\"$config.help.setting\" ng-change=\"$config.save()\">\n" +
        "           <div class=\"track\">\n" +
        "             <div class=\"handle\"></div>\n" +
        "           </div>\n" +
        "        </label>\n" +
        "        <span class=\"toggle-on\">På</span>\n" +
        "      </span>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "\n" +
        "  <div class=\"separator\">Återställ</div>\n" +
        "\n" +
        "  <div ida-help=\"help/settings/popups.tpl.html\" help-title=\"Visa avstängda pop-up:er igen\">\n" +
        "    <button class=\"clear-all-tasks\" ng-click=\"$popups.clear()\">Visa avstängda pop-up:er igen</button>\n" +
        "  </div>\n" +
        "  <br>\n" +
        "<!--   <div ida-help>\n" +
        "    <button class=\"clear-all-tasks\" ng-click=\"clearTasks('alla')\">Klar alla aktiviteter</button>\n" +
        "  </div> -->\n" +
        "\n" +
        "  <br>\n" +
        "</div>\n" +
        "");
}]);

angular.module("statistics.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("statistics.tpl.html",
        "<div class=\"statistics-page\">\n" +
        "\n" +
        "  <div class=\"quick-select\">\n" +
        "    <button ng-click=\"period = {\n" +
        "      startTime: moment().hour(0).minute(0)._d.valueOf(),\n" +
        "      endTime: moment().hour(23).minute(59)._d.valueOf()\n" +
        "    };\"><span>Idag</span></button><!--\n" +
        " --><button ng-click=\"period = {\n" +
        "      startTime: moment().startOf('day').day(moment().day() - 6)._d.valueOf(),\n" +
        "      endTime: moment()._d.valueOf()\n" +
        "    };\"><span>Senaste veckan</span></button><!--\n" +
        " --><button ng-click=\"period = {\n" +
        "      startTime: moment().startOf('day').day(moment().day() - 29)._d.valueOf(),\n" +
        "      endTime: moment()._d.valueOf()\n" +
        "    };\"><span>Senaste månaden</span></button>\n" +
        "  </div>\n" +
        "\n" +
        "  <div class=\"date-range-select\">\n" +
        "      <h2>från</h2>\n" +
        "      <button ng-click=\"setDatepicker('modal.pick_starttimeperiod.tpl.html', period)\"\n" +
        "              ng-class=\"{ 'selected': modal.task.startTime }\"\n" +
        "              ng-bind=\"period.startTime ? moment(period.startTime).format('ddd D MMM YYYY') : 'Välj datum'\"></button>\n" +
        "      <br><br>\n" +
        "      <h2>till</h2>\n" +
        "      <button ng-click=\"setDatepicker('modal.pick_endtime.tpl.html', period)\"\n" +
        "              ng-class=\"{ 'selected': modal.task.endTime }\"\n" +
        "              ng-bind=\"period.endTime ? moment(period.endTime).format('ddd D MMM YYYY') : 'Välj datum'\"></button>\n" +
        "  </div>\n" +
        "\n" +
        "  <div class=\"stats-table\">\n" +
        "    <table>\n" +
        "      <tr ng-repeat=\"stat in stats\">\n" +
        "        <td class=\"name\" ng-bind=\"stat.name\"></td>\n" +
        "        <td class=\"value\" ng-bind=\"stat.value\"></td>\n" +
        "      </tr>\n" +
        "    </table>\n" +
        "  </div>\n" +
        "\n" +
        "</div>\n" +
        "");
}]);

angular.module("todo.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("todo.tpl.html",
        "<div class=\"todo-page\">\n" +
        "\n" +
        "  <form class=\"add-task\">\n" +
        "    <div><input ng-model=\"newTask\" placeholder=\"Skapa ny aktivitet...\"></div>\n" +
        "    <button ng-click=\"addTask(newTask);newTask=''\"><i class=\"fa fa-plus\"></i></button>\n" +
        "  </form>\n" +
        "\n" +
        "  <div ng-hide=\"!$tasks.findWhere({finished:false,planned:false})\" class=\"unplanned\">\n" +
        "    <h2><i class=\"fa fa-inbox\"></i> Oplanerat</h2>\n" +
        "    <ul class=\"todo-list\">\n" +
        "      <li class=\"list-item unplanned\"\n" +
        "          ng-repeat=\"task in $tasks.where({finished:false,planned:false}) | orderBy:['-updated'] track by task.id\"\n" +
        "          ida-item=\"task\"></li>\n" +
        "    </ul>\n" +
        "  </div>\n" +
        "\n" +
        "  <div class=\"todo\">\n" +
        "    <h2>\n" +
        "      <i class=\"fa fa-check\"></i> Att göra\n" +
        "      <label for=\"period\">\n" +
        "        <select id=\"period\" ng-change=\"getTodoList()\" ng-model=\"$root.todoFilter\">\n" +
        "          <option value=\"today\">idag</option>\n" +
        "          <option value=\"tomorrow\">idag och imorgon</option>\n" +
        "          <option value=\"week\">en vecka framöver</option>\n" +
        "        </select>\n" +
        "      </label>\n" +
        "    </h2>\n" +
        "    <ul class=\"todo-list\">\n" +
        "      <li class=\"list-item\" ng-class=\"{'section-divider':$root.$list[$index-1]&&$root.$list[$index-1]._section<task._section}\" ng-repeat=\"task in $root.$list track by $index\" ida-item=\"task\"></li>\n" +
        "    </ul>\n" +
        "  </div>\n" +
        "  <br>\n" +
        "</div>\n" +
        "");
}]);

