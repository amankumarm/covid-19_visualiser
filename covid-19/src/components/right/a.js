import { ResponsiveLine } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data ,conf ,tv  }) => (
    <ResponsiveLine
        theme={{
            "background": conf.theme_bg,
            "textColor": conf.theme_fc,
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
        margin={{ top: 60, right: 60, bottom: 60, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 0, max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        curve="monotoneX"
        axisTop={null}
        axisRight={{
        	tickValues:[],
            orient: 'right',
            tickSize: 5,	
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset:20,
            legendPosition: 'middle'
        }}
        axisBottom={{
            tickValues:tv.x,
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Date',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        enableArea={true}        
        enableGridX={false}
        enableGridY={false}
        axisLeft={null}
        colors={{ scheme: conf.col_sc }}
        pointColor={{ theme: 'background' }}
        pointSize={5}
        // colors={{ datum: '#6C757D' }}
        pointBorderWidth={4}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        crosshairType="top-left"
        useMesh={true}
        legends={[]}
    />
)

export default MyResponsiveLine
