module.exports.DataMap = { //two packet formats in Forza 7 settings: Dash - 311 bytes / Sled - first 232 bytes
	"IsRaceOn": {"DataType": "s32", "Offset": 0},
	"TimestampMS": {"DataType": "u32", "Offset": 4},
	"EngineMaxRpm": {"DataType": "f32", "Offset": 8},
	"EngineIdleRpm": {"DataType": "f32", "Offset": 12},
	"CurrentEngineRpm": {"DataType": "f32", "Offset": 16},
	"AccelerationX": {"DataType": "f32", "Offset": 20},
	"AccelerationY": {"DataType": "f32", "Offset": 24},
	"AccelerationZ": {"DataType": "f32", "Offset": 28},
	"VelocityX": {"DataType": "f32", "Offset": 32},
	"VelocityY": {"DataType": "f32", "Offset": 36},
	"VelocityZ": {"DataType": "f32", "Offset": 40},
	"AngularVelocityX": {"DataType": "f32", "Offset": 44},
	"AngularVelocityY": {"DataType": "f32", "Offset": 48},
	"AngularVelocityZ": {"DataType": "f32", "Offset": 52},
	"Yaw": {"DataType": "f32", "Offset": 56},
	"Pitch": {"DataType": "f32", "Offset": 60},
	"Roll": {"DataType": "f32", "Offset": 64},
	"NormalizedSuspensionTravelFrontLeft": {"DataType": "f32", "Offset": 68},
	"NormalizedSuspensionTravelFrontRight": {"DataType": "f32", "Offset": 72},
	"NormalizedSuspensionTravelRearLeft": {"DataType": "f32", "Offset": 76},
	"NormalizedSuspensionTravelRearRight": {"DataType": "f32", "Offset": 80},
	"TireSlipRatioFrontLeft": {"DataType": "f32", "Offset": 84},
	"TireSlipRatioFrontRight": {"DataType": "f32", "Offset": 88},
	"TireSlipRatioRearLeft": {"DataType": "f32", "Offset": 92},
	"TireSlipRatioRearRight": {"DataType": "f32", "Offset": 96},
	"WheelRotationSpeedFrontLeft": {"DataType": "f32", "Offset": 100},
	"WheelRotationSpeedFrontRight": {"DataType": "f32", "Offset": 104},
	"WheelRotationSpeedRearLeft": {"DataType": "f32", "Offset": 108},
	"WheelRotationSpeedRearRight": {"DataType": "f32", "Offset": 112},
	"WheelOnRumbleStripFrontLeft": {"DataType": "s32", "Offset": 116},
	"WheelOnRumbleStripFrontRight": {"DataType": "s32", "Offset": 120},
	"WheelOnRumbleStripRearLeft": {"DataType": "s32", "Offset": 124},
	"WheelOnRumbleStripRearRight": {"DataType": "s32", "Offset": 128},
	"WheelInPuddleDepthFrontLeft": {"DataType": "f32", "Offset": 132},
	"WheelInPuddleDepthFrontRight": {"DataType": "f32", "Offset": 136},
	"WheelInPuddleDepthRearLeft": {"DataType": "f32", "Offset": 140},
	"WheelInPuddleDepthRearRight": {"DataType": "f32", "Offset": 144},
	"SurfaceRumbleFrontLeft": {"DataType": "f32", "Offset": 148},
	"SurfaceRumbleFrontRight": {"DataType": "f32", "Offset": 152},
	"SurfaceRumbleRearLeft": {"DataType": "f32", "Offset": 156},
	"SurfaceRumbleRearRight": {"DataType": "f32", "Offset": 160},
	"TireSlipAngleFrontLeft": {"DataType": "f32", "Offset": 164},
	"TireSlipAngleFrontRight": {"DataType": "f32", "Offset": 168},
	"TireSlipAngleRearLeft": {"DataType": "f32", "Offset": 172},
	"TireSlipAngleRearRight": {"DataType": "f32", "Offset": 176},
	"TireCombinedSlipFrontLeft": {"DataType": "f32", "Offset": 180},
	"TireCombinedSlipFrontRight": {"DataType": "f32", "Offset": 184},
	"TireCombinedSlipRearLeft": {"DataType": "f32", "Offset": 188},
	"TireCombinedSlipRearRight": {"DataType": "f32", "Offset": 192},
	"SuspensionTravelMetersFrontLeft": {"DataType": "f32", "Offset": 196},
	"SuspensionTravelMetersFrontRight": {"DataType": "f32", "Offset": 200},
	"SuspensionTravelMetersRearLeft": {"DataType": "f32", "Offset": 204},
	"SuspensionTravelMetersRearRight": {"DataType": "f32", "Offset": 208},
	"CarOrdinal": {"DataType": "s32", "Offset": 212},
	"CarClass": {"DataType": "s32", "Offset": 216},
	"CarPerformanceIndex": {"DataType": "s32", "Offset": 220},
	"DrivetrainType": {"DataType": "s32", "Offset": 224},
	"NumCycliners": {"DataType": "s32", "Offset": 228},
	"PositionX": {"DataType": "f32", "Offset": 232},
	"PositionY": {"DataType": "f32", "Offset": 236},
	"PositionZ": {"DataType": "f32", "Offset": 240},
	"Speed": {"DataType": "f32", "Offset": 244},
	"Power": {"DataType": "f32", "Offset": 248},
	"Torque": {"DataType": "f32", "Offset": 252},
	"TireTempFrontLeft": {"DataType": "f32", "Offset": 256},
	"TireTempFrontRight": {"DataType": "f32", "Offset": 260},
	"TireTempRearLeft": {"DataType": "f32", "Offset": 264},
	"TireTempRearRight": {"DataType": "f32", "Offset": 268},
	"Boost": {"DataType": "f32", "Offset": 272},
	"Fuel": {"DataType": "f32", "Offset": 276},
	"DistanceTraveled": {"DataType": "f32", "Offset": 280},
	"BestLap": {"DataType": "f32", "Offset": 284},
	"LastLap": {"DataType": "f32", "Offset": 288},
	"CurrentLap": {"DataType": "f32", "Offset": 292},
	"CurrentRaceTime": {"DataType": "f32", "Offset": 296},
	"LapNumber": {"DataType": "u16", "Offset": 300},
	"RacePosition": {"DataType": "u8", "Offset": 302},
	"Accel": {"DataType": "u8", "Offset": 303},
	"Brake": {"DataType": "u8", "Offset": 304},
	"Clutch": {"DataType": "u8", "Offset": 305},
	"HandBrake": {"DataType": "u8", "Offset": 306},
	"Gear": {"DataType": "u8", "Offset": 307},
	"Steer": {"DataType": "s8", "Offset": 308},
	"NormalizedDrivingLine": {"DataType": "s8", "Offset": 309},
	"NormalizedAIBrakeDifference": {"DataType": "s8", "Offset": 310}
};