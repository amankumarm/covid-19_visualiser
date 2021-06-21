import { ResponsiveLine } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
        theme={{
            "background": "#331327",
            "textColor": "#ff073a",
            "fontSize": 13,
            "axis": {
                "domain": {
                    "line": {
                        "stroke": "#968d8d",
                        "strokeWidth": 1
                    }
                },
                "ticks": {
                    "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                    }
                }
            },
            "grid": {
                "line": {
                    "stroke": "#ff0000",
                    "strokeWidth": 0
                }
            }
        }}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 0, max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickValues:[
                0,10,20,30,40,50
            ],
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        enableArea={true}        
        enableGridX={false}
        enableGridY={false}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'red_yellow_blue' }}
        pointColor={{ theme: 'background' }}
        pointSize={5}
        pointBorderWidth={4}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        crosshairType="top-left"
        useMesh={true}
        legends={[]}
    />
)

export default MyResponsiveLine