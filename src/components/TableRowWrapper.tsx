import styled from "styled-components"

interface TableRowWrapperProps {
  openClickedRow?: boolean;
	statusColor?: string;
}

const TableRowWrapper = styled.tr<TableRowWrapperProps>`
	position: relative;
	border: none;
	background-color: rgba(243, 247, 248, 0.6);
	display: flex;
	flex-direction: row;
	height: 40px;
	height: ${({ openClickedRow }) => openClickedRow && '100%'};
	justify-content: ${({ openClickedRow }) => openClickedRow && 'flex-start'};
	align-items: ${({ openClickedRow }) => openClickedRow && 'flex-start'};
	flex-wrap: wrap;

	@media (max-width: 768px) {
		flex-wrap: wrap;
	}

	:hover {
		background-color: #fffbd1;
		cursor: pointer;
	}

	:nth-child(even) {
		background-color: #ffffff;
	}
	
	// td
	.dashboard__body-row--cell {
		padding: 5px 10px;
		width: 100%;
		min-width: 160px;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 25%;
		height: 40px;
		
		:not(:first-child) :not(:last-child) {
			height: ${({ openClickedRow }) => openClickedRow ? '20px' : '40px'};
		}

		.mobile_status {
			position: relative;
		}

		@media (max-width: 768px) {
			padding: 0 0 0 10px;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			width: 50%;
			display: ${({ openClickedRow }) => openClickedRow ? 'flex' : 'none'};

			:nth-child(-n + 2) {
				display: flex;
			}

			:nth-last-child(2) {
				display: flex;
			}

			.mobile_status {
				position: absolute;
			}
		}
	}

	.cell_status {
		min-width: 120px;
	}

	.see-more__button {
		position: absolute;
		right: 10px;
		justify-content: flex-end;

		.eye-button {
      cursor: pointer;
    }
	}

	.payment-details {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	table {
		width: 100%;
		height: 100%;
		margin: 10px;

		tr {
			display: flex;
			width: 100%;

			th {
				width: 200px;
				display: flex;
				font-weight: bold;
			}

			td {
				padding: 0;
				margin: 0;
				height: unset;
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
			}
			
			// third table
			.plan {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: center;
				flex-wrap: wrap;
				margin: 10px;

				@media (max-width: 768px) {
					margin: 10px 0 0 10px;
				}

				&__head {
					&-row {
						@media (max-width: 768px) {
							display: none;
						}
						&--cell {
							margin: 0 10px 0 0;
						}
					}
				}

				&__body {
					&-row {
						@media (max-width: 768px) {
							flex-direction: column;
							margin: 0 0 10px;
						}

						&--cell {
							margin: 0 10px 0 0;

							.plan__mobile-head {
								display: none;
								font-weight: bold;
								margin: 0 5px 0 0;
								width: 100px;

								@media (max-width: 768px) {
									display: flex;
								}
							}
						}
					}
				}

				th {
					min-width: 100px;
					width: auto;
				}
	
				td {
					min-width: 100px;
					width: auto;
				}
			}
		}

		.plan-details {
			@media (max-width: 768px) {
				flex-direction: column;
			}
		}
	}
`;

const Status = styled.p`
	height: 12px;
	width: 12px;
	border-radius: 100%;
	margin: 0 14px 0 0;
	background-color: ${({ statusColor }) => statusColor === 'not_started' && '#ff9d00'};
	background-color: ${({ statusColor }) => statusColor === 'ready' && '#fff700'};
	background-color: ${({ statusColor }) => statusColor === 'in_progress' && '#00ff55'};
	background-color: ${({ statusColor }) => statusColor === 'default' && '#ff0000'};
	background-color: ${({ statusColor }) => statusColor === 'paid' && '#00a2ff'};
`;
// #132815 #0d6473 #ff713a #ffea63 #fffbd1

export { TableRowWrapper, Status };