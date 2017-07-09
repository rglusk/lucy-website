import React, { Component, PropTypes } from 'react';

export default class Paint extends Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object.isRequired,
        height: PropTypes.number,
        width: PropTypes.number,
        brushCol: PropTypes.string,
        lineWidth: PropTypes.number,
    };
    static defaultProps = {
        className: 'react-paint',
        style: {},
        height: 500,
        width: 500,
        brushCol: '#ffffff',
        lineWidth: 10,
    };

    constructor(...props) {
        super(...props);

        this.state = {
            mouseDown: false,
            mouseLoc: [0, 0],
        };
    }

    componentDidMount() {
        const { brushCol, lineWidth } = this.props;

        this.context = this.canvas.getContext('2d');
        this.context.lineWidth = lineWidth;
        this.context.strokeStyle = brushCol;
        this.context.lineJoin = this.context.lineCap = 'round';
    }

    componentWillUpdate(nextProps) {
        const { brushCol, lineWidth } = this.props;

        if (
            brushCol !== nextProps.brushCol ||
            lineWidth !== nextProps.lineWidth
        ) {
            this.context.lineWidth = nextProps.lineWidth;
            this.context.strokeStyle = nextProps.brushCol;
        }
    }

    mouseDown = e => {
        if (!this.state.mouseDown) this.setState({ mouseDown: true });

        this.setState({
            mouseLoc: [e.pageX, e.pageY ],
        });

        this.context.moveTo(( e.pageX ),( e.pageY ));
    }

    mouseUp = () => (this.setState({ mouseDown: false }));

    mouseMove = e => {

        if (this.state.mouseDown) {
            // prevent IOS scroll when drawing
            if (
                (e.pageX ) > 0 &&
                (e.pageY ) < this.props.height
            ) {
                this.context.lineTo(
                    ((e.pageX ) ) ,
                    ((e.pageY ) )
                );
                this.context.stroke();
            }
        }
    }

    render() {
        const {
            width,
            height,
            style,
            className,
        } = this.props;

        return (
            <div className={className}>
                <canvas
                    ref={c => (this.canvas = c)}
                    className={`${className}__canvas`}

                    width={width}
                    height={height}

                    style={
                        Object.assign({}, style, {
                            width: this.props.width,
                            height: this.props.height,
                        })
                    }

                    onMouseDown={this.mouseDown}
                    onMouseEnter={this.mouseDown}
                    onMouseUp={this.mouseUp}
                    onMouseLeave={this.mouseUp}
                    onMouseMove={this.mouseMove}
                />
            </div>
        );
    }
}


export { Paint };