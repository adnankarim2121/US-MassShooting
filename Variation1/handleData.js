function getData(data)
{
    /*
* More data processing, the tedious way
*
*/
    var sumInjuredNoMentalHealth = 0;
    var sumFatalitiesNoMentalHealth = 0;
    for(i =0; i < data.length; i++)
    {
        if(data[i].mentalHealth === "No")
        {
            sumInjuredNoMentalHealth = sumInjuredNoMentalHealth + data[i].injured;
            sumFatalitiesNoMentalHealth = sumFatalitiesNoMentalHealth + data[i].fatalities;
        }
    }

    var sumInjuredYesMentalHealth = 0;
    var sumFatalitiesYesMentalHealth = 0;
    for(i =0; i < data.length; i++)
    {
        if(data[i].mentalHealth === "Yes")
        {
            sumInjuredYesMentalHealth = sumInjuredYesMentalHealth + data[i].injured;
            sumFatalitiesYesMentalHealth = sumFatalitiesYesMentalHealth + data[i].fatalities;
        }
    }

    var sumInjuredUnclearMentalHealth = 0;
    var sumFatalitiesUnclearMentalHealth = 0;
    for(i =0; i < data.length; i++)
    {
        if(data[i].mentalHealth === "Unclear")
        {
            sumInjuredUnclearMentalHealth = sumInjuredUnclearMentalHealth + data[i].injured;
            sumFatalitiesUnclearMentalHealth = sumFatalitiesUnclearMentalHealth + data[i].fatalities;
        }
    }

    var sumInjuredUnknownMentalHealth = 0;
    var sumFatalitiesUnknownMentalHealth = 0;
    for(i =0; i < data.length; i++)
    {
        if(data[i].mentalHealth === "Unknown")
        {
            sumInjuredUnknownMentalHealth = sumInjuredUnknownMentalHealth + data[i].injured;
            sumFatalitiesUnknownMentalHealth = sumFatalitiesUnknownMentalHealth + data[i].fatalities;
        }
    }
    var newData = [
        {mentalHealth:"No", injured: sumInjuredNoMentalHealth, fatalities: sumFatalitiesNoMentalHealth, total:
                sumInjuredNoMentalHealth + sumFatalitiesNoMentalHealth},
        {mentalHealth:"Yes", injured: sumInjuredYesMentalHealth, fatalities: sumFatalitiesYesMentalHealth, total:
                sumInjuredYesMentalHealth + sumFatalitiesYesMentalHealth},
        {mentalHealth:"Unclear", injured: sumInjuredUnclearMentalHealth, fatalities: sumFatalitiesUnclearMentalHealth, total:
                sumInjuredUnclearMentalHealth + sumFatalitiesUnclearMentalHealth},
        {mentalHealth:"Unknown", injured: sumInjuredUnknownMentalHealth, fatalities: sumFatalitiesUnknownMentalHealth, total:
                sumInjuredUnknownMentalHealth + sumFatalitiesUnknownMentalHealth}

    ];

    return newData;
}

function filterData(data)
{
    /*
* More data processing, the tedious way
*
*/
    var sumInjuredNoMentalHealth = 0;
    var sumFatalitiesNoMentalHealth = 0;
    for(i =0; i < data.length; i++)
    {
        if(data[i].mentalHealth === "No")
        {
            sumInjuredNoMentalHealth = sumInjuredNoMentalHealth + data[i].injured;
            sumFatalitiesNoMentalHealth = sumFatalitiesNoMentalHealth + data[i].fatalities;
        }
    }

    var sumInjuredYesMentalHealth = 0;
    var sumFatalitiesYesMentalHealth = 0;
    for(i =0; i < data.length; i++)
    {
        if(data[i].mentalHealth === "Yes")
        {
            sumInjuredYesMentalHealth = sumInjuredYesMentalHealth + data[i].injured;
            sumFatalitiesYesMentalHealth = sumFatalitiesYesMentalHealth + data[i].fatalities;
        }
    }

    var sumInjuredUnclearMentalHealth = 0;
    var sumFatalitiesUnclearMentalHealth = 0;
    for(i =0; i < data.length; i++)
    {
        if(data[i].mentalHealth === "Unclear")
        {
            sumInjuredUnclearMentalHealth = sumInjuredUnclearMentalHealth + data[i].injured;
            sumFatalitiesUnclearMentalHealth = sumFatalitiesUnclearMentalHealth + data[i].fatalities;
        }
    }

    var sumInjuredUnknownMentalHealth = 0;
    var sumFatalitiesUnknownMentalHealth = 0;
    for(i =0; i < data.length; i++)
    {
        if(data[i].mentalHealth === "Unknown")
        {
            sumInjuredUnknownMentalHealth = sumInjuredUnknownMentalHealth + data[i].injured;
            sumFatalitiesUnknownMentalHealth = sumFatalitiesUnknownMentalHealth + data[i].fatalities;
        }
    }
    var newData = [
        {mentalHealth:"No", injured: sumInjuredNoMentalHealth, fatalities: sumFatalitiesNoMentalHealth, total:
                sumInjuredNoMentalHealth + sumFatalitiesNoMentalHealth},
        {mentalHealth:"Yes", injured: sumInjuredYesMentalHealth, fatalities: sumFatalitiesYesMentalHealth, total:
                sumInjuredYesMentalHealth + sumFatalitiesYesMentalHealth},
        {mentalHealth:"Unclear", injured: sumInjuredUnclearMentalHealth, fatalities: sumFatalitiesUnclearMentalHealth, total:
                sumInjuredUnclearMentalHealth + sumFatalitiesUnclearMentalHealth},
        {mentalHealth:"Unknown", injured: sumInjuredUnknownMentalHealth, fatalities: sumFatalitiesUnknownMentalHealth, total:
                sumInjuredUnknownMentalHealth + sumFatalitiesUnknownMentalHealth}

    ];

    return newData;
}