/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevicePostureRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#account_id DevicePostureRule#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#description DevicePostureRule#description}
  */
  readonly description?: string;
  /**
  * Expire posture results after the specified amount of time. Must be in the format `1h` or `30m`. Valid units are `h` and `m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#expiration DevicePostureRule#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#id DevicePostureRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the device posture rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#name DevicePostureRule#name}
  */
  readonly name?: string;
  /**
  * Tells the client when to run the device posture check. Must be in the format `1h` or `30m`. Valid units are `h` and `m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#schedule DevicePostureRule#schedule}
  */
  readonly schedule?: string;
  /**
  * The device posture rule type. Available values: `serial_number`, `file`, `application`, `gateway`, `warp`, `domain_joined`, `os_version`, `disk_encryption`, `firewall`, `client_certificate`, `workspace_one`, `unique_client_id`, `crowdstrike_s2s`, `sentinelone`, `kolide`, `tanium_s2s`, `intune`, `sentinelone_s2s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#type DevicePostureRule#type}
  */
  readonly type: string;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#input DevicePostureRule#input}
  */
  readonly input?: DevicePostureRuleInput[] | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#match DevicePostureRule#match}
  */
  readonly match?: DevicePostureRuleMatch[] | cdktf.IResolvable;
}
export interface DevicePostureRuleInput {
  /**
  * The number of active threats from SentinelOne.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#active_threats DevicePostureRule#active_threats}
  */
  readonly activeThreats?: number;
  /**
  * The UUID of a Cloudflare managed certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#certificate_id DevicePostureRule#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Specific volume(s) to check for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#check_disks DevicePostureRule#check_disks}
  */
  readonly checkDisks?: string[];
  /**
  * The common name for a certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#cn DevicePostureRule#cn}
  */
  readonly cn?: string;
  /**
  * The workspace one device compliance status. Available values: `compliant`, `noncompliant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#compliance_status DevicePostureRule#compliance_status}
  */
  readonly complianceStatus?: string;
  /**
  * The workspace one connection id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#connection_id DevicePostureRule#connection_id}
  */
  readonly connectionId?: string;
  /**
  * The count comparison operator for kolide. Available values: `>`, `>=`, `<`, `<=`, `==`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#count_operator DevicePostureRule#count_operator}
  */
  readonly countOperator?: string;
  /**
  * The domain that the client must join.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#domain DevicePostureRule#domain}
  */
  readonly domain?: string;
  /**
  * The datetime a device last seen in RFC 3339 format from Tanium.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#eid_last_seen DevicePostureRule#eid_last_seen}
  */
  readonly eidLastSeen?: string;
  /**
  * True if the firewall must be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#enabled DevicePostureRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Checks if the file should exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#exists DevicePostureRule#exists}
  */
  readonly exists?: boolean | cdktf.IResolvable;
  /**
  * The Teams List id. Required for `serial_number` and `unique_client_id` rule types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#id DevicePostureRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * True if SentinelOne device is infected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#infected DevicePostureRule#infected}
  */
  readonly infected?: boolean | cdktf.IResolvable;
  /**
  * True if SentinelOne device is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#is_active DevicePostureRule#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * The number of issues for kolide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#issue_count DevicePostureRule#issue_count}
  */
  readonly issueCount?: string;
  /**
  * The network status from SentinelOne. Available values: `connected`, `disconnected`, `disconnecting`, `connecting`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#network_status DevicePostureRule#network_status}
  */
  readonly networkStatus?: string;
  /**
  * The version comparison operator. Available values: `>`, `>=`, `<`, `<=`, `==`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#operator DevicePostureRule#operator}
  */
  readonly operator?: string;
  /**
  * OS signal score from Crowdstrike. Value must be between 1 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#os DevicePostureRule#os}
  */
  readonly os?: string;
  /**
  * The operating system excluding version information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#os_distro_name DevicePostureRule#os_distro_name}
  */
  readonly osDistroName?: string;
  /**
  * The operating system version excluding OS name information or release name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#os_distro_revision DevicePostureRule#os_distro_revision}
  */
  readonly osDistroRevision?: string;
  /**
  * Overall ZTA score from Crowdstrike. Value must be between 1 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#overall DevicePostureRule#overall}
  */
  readonly overall?: string;
  /**
  * The path to the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#path DevicePostureRule#path}
  */
  readonly path?: string;
  /**
  * True if all drives must be encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#require_all DevicePostureRule#require_all}
  */
  readonly requireAll?: boolean | cdktf.IResolvable;
  /**
  * The risk level from Tanium. Available values: `low`, `medium`, `high`, `critical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#risk_level DevicePostureRule#risk_level}
  */
  readonly riskLevel?: string;
  /**
  * Checks if the application should be running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#running DevicePostureRule#running}
  */
  readonly running?: boolean | cdktf.IResolvable;
  /**
  * Sensor signal score from Crowdstrike. Value must be between 1 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#sensor_config DevicePostureRule#sensor_config}
  */
  readonly sensorConfig?: string;
  /**
  * The sha256 hash of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#sha256 DevicePostureRule#sha256}
  */
  readonly sha256?: string;
  /**
  * The thumbprint of the file certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#thumbprint DevicePostureRule#thumbprint}
  */
  readonly thumbprint?: string;
  /**
  * The total score from Tanium.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#total_score DevicePostureRule#total_score}
  */
  readonly totalScore?: number;
  /**
  * The operating system semantic version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#version DevicePostureRule#version}
  */
  readonly version?: string;
  /**
  * The version comparison operator for crowdstrike. Available values: `>`, `>=`, `<`, `<=`, `==`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#version_operator DevicePostureRule#version_operator}
  */
  readonly versionOperator?: string;
}

export function devicePostureRuleInputToTerraform(struct?: DevicePostureRuleInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_threats: cdktf.numberToTerraform(struct!.activeThreats),
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    check_disks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.checkDisks),
    cn: cdktf.stringToTerraform(struct!.cn),
    compliance_status: cdktf.stringToTerraform(struct!.complianceStatus),
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    count_operator: cdktf.stringToTerraform(struct!.countOperator),
    domain: cdktf.stringToTerraform(struct!.domain),
    eid_last_seen: cdktf.stringToTerraform(struct!.eidLastSeen),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exists: cdktf.booleanToTerraform(struct!.exists),
    id: cdktf.stringToTerraform(struct!.id),
    infected: cdktf.booleanToTerraform(struct!.infected),
    is_active: cdktf.booleanToTerraform(struct!.isActive),
    issue_count: cdktf.stringToTerraform(struct!.issueCount),
    network_status: cdktf.stringToTerraform(struct!.networkStatus),
    operator: cdktf.stringToTerraform(struct!.operator),
    os: cdktf.stringToTerraform(struct!.os),
    os_distro_name: cdktf.stringToTerraform(struct!.osDistroName),
    os_distro_revision: cdktf.stringToTerraform(struct!.osDistroRevision),
    overall: cdktf.stringToTerraform(struct!.overall),
    path: cdktf.stringToTerraform(struct!.path),
    require_all: cdktf.booleanToTerraform(struct!.requireAll),
    risk_level: cdktf.stringToTerraform(struct!.riskLevel),
    running: cdktf.booleanToTerraform(struct!.running),
    sensor_config: cdktf.stringToTerraform(struct!.sensorConfig),
    sha256: cdktf.stringToTerraform(struct!.sha256),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    total_score: cdktf.numberToTerraform(struct!.totalScore),
    version: cdktf.stringToTerraform(struct!.version),
    version_operator: cdktf.stringToTerraform(struct!.versionOperator),
  }
}


export function devicePostureRuleInputToHclTerraform(struct?: DevicePostureRuleInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_threats: {
      value: cdktf.numberToHclTerraform(struct!.activeThreats),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_disks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.checkDisks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cn: {
      value: cdktf.stringToHclTerraform(struct!.cn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compliance_status: {
      value: cdktf.stringToHclTerraform(struct!.complianceStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count_operator: {
      value: cdktf.stringToHclTerraform(struct!.countOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eid_last_seen: {
      value: cdktf.stringToHclTerraform(struct!.eidLastSeen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exists: {
      value: cdktf.booleanToHclTerraform(struct!.exists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infected: {
      value: cdktf.booleanToHclTerraform(struct!.infected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_active: {
      value: cdktf.booleanToHclTerraform(struct!.isActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issue_count: {
      value: cdktf.stringToHclTerraform(struct!.issueCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_status: {
      value: cdktf.stringToHclTerraform(struct!.networkStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_distro_name: {
      value: cdktf.stringToHclTerraform(struct!.osDistroName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_distro_revision: {
      value: cdktf.stringToHclTerraform(struct!.osDistroRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overall: {
      value: cdktf.stringToHclTerraform(struct!.overall),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_all: {
      value: cdktf.booleanToHclTerraform(struct!.requireAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    risk_level: {
      value: cdktf.stringToHclTerraform(struct!.riskLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    running: {
      value: cdktf.booleanToHclTerraform(struct!.running),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensor_config: {
      value: cdktf.stringToHclTerraform(struct!.sensorConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sha256: {
      value: cdktf.stringToHclTerraform(struct!.sha256),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_score: {
      value: cdktf.numberToHclTerraform(struct!.totalScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_operator: {
      value: cdktf.stringToHclTerraform(struct!.versionOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevicePostureRuleInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DevicePostureRuleInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeThreats !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeThreats = this._activeThreats;
    }
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    if (this._checkDisks !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkDisks = this._checkDisks;
    }
    if (this._cn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cn = this._cn;
    }
    if (this._complianceStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceStatus = this._complianceStatus;
    }
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._countOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.countOperator = this._countOperator;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._eidLastSeen !== undefined) {
      hasAnyValues = true;
      internalValueResult.eidLastSeen = this._eidLastSeen;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exists !== undefined) {
      hasAnyValues = true;
      internalValueResult.exists = this._exists;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._infected !== undefined) {
      hasAnyValues = true;
      internalValueResult.infected = this._infected;
    }
    if (this._isActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isActive = this._isActive;
    }
    if (this._issueCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueCount = this._issueCount;
    }
    if (this._networkStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkStatus = this._networkStatus;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._osDistroName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDistroName = this._osDistroName;
    }
    if (this._osDistroRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDistroRevision = this._osDistroRevision;
    }
    if (this._overall !== undefined) {
      hasAnyValues = true;
      internalValueResult.overall = this._overall;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._requireAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAll = this._requireAll;
    }
    if (this._riskLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.riskLevel = this._riskLevel;
    }
    if (this._running !== undefined) {
      hasAnyValues = true;
      internalValueResult.running = this._running;
    }
    if (this._sensorConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensorConfig = this._sensorConfig;
    }
    if (this._sha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256 = this._sha256;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    if (this._totalScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalScore = this._totalScore;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._versionOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionOperator = this._versionOperator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevicePostureRuleInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeThreats = undefined;
      this._certificateId = undefined;
      this._checkDisks = undefined;
      this._cn = undefined;
      this._complianceStatus = undefined;
      this._connectionId = undefined;
      this._countOperator = undefined;
      this._domain = undefined;
      this._eidLastSeen = undefined;
      this._enabled = undefined;
      this._exists = undefined;
      this._id = undefined;
      this._infected = undefined;
      this._isActive = undefined;
      this._issueCount = undefined;
      this._networkStatus = undefined;
      this._operator = undefined;
      this._os = undefined;
      this._osDistroName = undefined;
      this._osDistroRevision = undefined;
      this._overall = undefined;
      this._path = undefined;
      this._requireAll = undefined;
      this._riskLevel = undefined;
      this._running = undefined;
      this._sensorConfig = undefined;
      this._sha256 = undefined;
      this._thumbprint = undefined;
      this._totalScore = undefined;
      this._version = undefined;
      this._versionOperator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeThreats = value.activeThreats;
      this._certificateId = value.certificateId;
      this._checkDisks = value.checkDisks;
      this._cn = value.cn;
      this._complianceStatus = value.complianceStatus;
      this._connectionId = value.connectionId;
      this._countOperator = value.countOperator;
      this._domain = value.domain;
      this._eidLastSeen = value.eidLastSeen;
      this._enabled = value.enabled;
      this._exists = value.exists;
      this._id = value.id;
      this._infected = value.infected;
      this._isActive = value.isActive;
      this._issueCount = value.issueCount;
      this._networkStatus = value.networkStatus;
      this._operator = value.operator;
      this._os = value.os;
      this._osDistroName = value.osDistroName;
      this._osDistroRevision = value.osDistroRevision;
      this._overall = value.overall;
      this._path = value.path;
      this._requireAll = value.requireAll;
      this._riskLevel = value.riskLevel;
      this._running = value.running;
      this._sensorConfig = value.sensorConfig;
      this._sha256 = value.sha256;
      this._thumbprint = value.thumbprint;
      this._totalScore = value.totalScore;
      this._version = value.version;
      this._versionOperator = value.versionOperator;
    }
  }

  // active_threats - computed: false, optional: true, required: false
  private _activeThreats?: number; 
  public get activeThreats() {
    return this.getNumberAttribute('active_threats');
  }
  public set activeThreats(value: number) {
    this._activeThreats = value;
  }
  public resetActiveThreats() {
    this._activeThreats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeThreatsInput() {
    return this._activeThreats;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // check_disks - computed: false, optional: true, required: false
  private _checkDisks?: string[]; 
  public get checkDisks() {
    return cdktf.Fn.tolist(this.getListAttribute('check_disks'));
  }
  public set checkDisks(value: string[]) {
    this._checkDisks = value;
  }
  public resetCheckDisks() {
    this._checkDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkDisksInput() {
    return this._checkDisks;
  }

  // cn - computed: false, optional: true, required: false
  private _cn?: string; 
  public get cn() {
    return this.getStringAttribute('cn');
  }
  public set cn(value: string) {
    this._cn = value;
  }
  public resetCn() {
    this._cn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnInput() {
    return this._cn;
  }

  // compliance_status - computed: false, optional: true, required: false
  private _complianceStatus?: string; 
  public get complianceStatus() {
    return this.getStringAttribute('compliance_status');
  }
  public set complianceStatus(value: string) {
    this._complianceStatus = value;
  }
  public resetComplianceStatus() {
    this._complianceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceStatusInput() {
    return this._complianceStatus;
  }

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // count_operator - computed: false, optional: true, required: false
  private _countOperator?: string; 
  public get countOperator() {
    return this.getStringAttribute('count_operator');
  }
  public set countOperator(value: string) {
    this._countOperator = value;
  }
  public resetCountOperator() {
    this._countOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countOperatorInput() {
    return this._countOperator;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // eid_last_seen - computed: false, optional: true, required: false
  private _eidLastSeen?: string; 
  public get eidLastSeen() {
    return this.getStringAttribute('eid_last_seen');
  }
  public set eidLastSeen(value: string) {
    this._eidLastSeen = value;
  }
  public resetEidLastSeen() {
    this._eidLastSeen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eidLastSeenInput() {
    return this._eidLastSeen;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exists - computed: true, optional: true, required: false
  private _exists?: boolean | cdktf.IResolvable; 
  public get exists() {
    return this.getBooleanAttribute('exists');
  }
  public set exists(value: boolean | cdktf.IResolvable) {
    this._exists = value;
  }
  public resetExists() {
    this._exists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existsInput() {
    return this._exists;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // infected - computed: true, optional: true, required: false
  private _infected?: boolean | cdktf.IResolvable; 
  public get infected() {
    return this.getBooleanAttribute('infected');
  }
  public set infected(value: boolean | cdktf.IResolvable) {
    this._infected = value;
  }
  public resetInfected() {
    this._infected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infectedInput() {
    return this._infected;
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // issue_count - computed: false, optional: true, required: false
  private _issueCount?: string; 
  public get issueCount() {
    return this.getStringAttribute('issue_count');
  }
  public set issueCount(value: string) {
    this._issueCount = value;
  }
  public resetIssueCount() {
    this._issueCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueCountInput() {
    return this._issueCount;
  }

  // network_status - computed: false, optional: true, required: false
  private _networkStatus?: string; 
  public get networkStatus() {
    return this.getStringAttribute('network_status');
  }
  public set networkStatus(value: string) {
    this._networkStatus = value;
  }
  public resetNetworkStatus() {
    this._networkStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkStatusInput() {
    return this._networkStatus;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // os_distro_name - computed: false, optional: true, required: false
  private _osDistroName?: string; 
  public get osDistroName() {
    return this.getStringAttribute('os_distro_name');
  }
  public set osDistroName(value: string) {
    this._osDistroName = value;
  }
  public resetOsDistroName() {
    this._osDistroName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDistroNameInput() {
    return this._osDistroName;
  }

  // os_distro_revision - computed: false, optional: true, required: false
  private _osDistroRevision?: string; 
  public get osDistroRevision() {
    return this.getStringAttribute('os_distro_revision');
  }
  public set osDistroRevision(value: string) {
    this._osDistroRevision = value;
  }
  public resetOsDistroRevision() {
    this._osDistroRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDistroRevisionInput() {
    return this._osDistroRevision;
  }

  // overall - computed: false, optional: true, required: false
  private _overall?: string; 
  public get overall() {
    return this.getStringAttribute('overall');
  }
  public set overall(value: string) {
    this._overall = value;
  }
  public resetOverall() {
    this._overall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overallInput() {
    return this._overall;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // require_all - computed: true, optional: true, required: false
  private _requireAll?: boolean | cdktf.IResolvable; 
  public get requireAll() {
    return this.getBooleanAttribute('require_all');
  }
  public set requireAll(value: boolean | cdktf.IResolvable) {
    this._requireAll = value;
  }
  public resetRequireAll() {
    this._requireAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAllInput() {
    return this._requireAll;
  }

  // risk_level - computed: false, optional: true, required: false
  private _riskLevel?: string; 
  public get riskLevel() {
    return this.getStringAttribute('risk_level');
  }
  public set riskLevel(value: string) {
    this._riskLevel = value;
  }
  public resetRiskLevel() {
    this._riskLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskLevelInput() {
    return this._riskLevel;
  }

  // running - computed: true, optional: true, required: false
  private _running?: boolean | cdktf.IResolvable; 
  public get running() {
    return this.getBooleanAttribute('running');
  }
  public set running(value: boolean | cdktf.IResolvable) {
    this._running = value;
  }
  public resetRunning() {
    this._running = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningInput() {
    return this._running;
  }

  // sensor_config - computed: false, optional: true, required: false
  private _sensorConfig?: string; 
  public get sensorConfig() {
    return this.getStringAttribute('sensor_config');
  }
  public set sensorConfig(value: string) {
    this._sensorConfig = value;
  }
  public resetSensorConfig() {
    this._sensorConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorConfigInput() {
    return this._sensorConfig;
  }

  // sha256 - computed: false, optional: true, required: false
  private _sha256?: string; 
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
  public set sha256(value: string) {
    this._sha256 = value;
  }
  public resetSha256() {
    this._sha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256;
  }

  // thumbprint - computed: false, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // total_score - computed: false, optional: true, required: false
  private _totalScore?: number; 
  public get totalScore() {
    return this.getNumberAttribute('total_score');
  }
  public set totalScore(value: number) {
    this._totalScore = value;
  }
  public resetTotalScore() {
    this._totalScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalScoreInput() {
    return this._totalScore;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_operator - computed: false, optional: true, required: false
  private _versionOperator?: string; 
  public get versionOperator() {
    return this.getStringAttribute('version_operator');
  }
  public set versionOperator(value: string) {
    this._versionOperator = value;
  }
  public resetVersionOperator() {
    this._versionOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionOperatorInput() {
    return this._versionOperator;
  }
}

export class DevicePostureRuleInputList extends cdktf.ComplexList {
  public internalValue? : DevicePostureRuleInput[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DevicePostureRuleInputOutputReference {
    return new DevicePostureRuleInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevicePostureRuleMatch {
  /**
  * The platform of the device. Available values: `windows`, `mac`, `linux`, `android`, `ios`, `chromeos`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#platform DevicePostureRule#platform}
  */
  readonly platform?: string;
}

export function devicePostureRuleMatchToTerraform(struct?: DevicePostureRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    platform: cdktf.stringToTerraform(struct!.platform),
  }
}


export function devicePostureRuleMatchToHclTerraform(struct?: DevicePostureRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevicePostureRuleMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DevicePostureRuleMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevicePostureRuleMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._platform = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._platform = value.platform;
    }
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }
}

export class DevicePostureRuleMatchList extends cdktf.ComplexList {
  public internalValue? : DevicePostureRuleMatch[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DevicePostureRuleMatchOutputReference {
    return new DevicePostureRuleMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule cloudflare_device_posture_rule}
*/
export class DevicePostureRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_device_posture_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevicePostureRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevicePostureRule to import
  * @param importFromId The id of the existing DevicePostureRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevicePostureRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_device_posture_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/device_posture_rule cloudflare_device_posture_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevicePostureRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DevicePostureRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_device_posture_rule',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.24.0',
        providerVersionConstraint: '~> 4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._description = config.description;
    this._expiration = config.expiration;
    this._id = config.id;
    this._name = config.name;
    this._schedule = config.schedule;
    this._type = config.type;
    this._input.internalValue = config.input;
    this._match.internalValue = config.match;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // input - computed: false, optional: true, required: false
  private _input = new DevicePostureRuleInputList(this, "input", false);
  public get input() {
    return this._input;
  }
  public putInput(value: DevicePostureRuleInput[] | cdktf.IResolvable) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DevicePostureRuleMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: DevicePostureRuleMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      expiration: cdktf.stringToTerraform(this._expiration),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      schedule: cdktf.stringToTerraform(this._schedule),
      type: cdktf.stringToTerraform(this._type),
      input: cdktf.listMapper(devicePostureRuleInputToTerraform, true)(this._input.internalValue),
      match: cdktf.listMapper(devicePostureRuleMatchToTerraform, true)(this._match.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration: {
        value: cdktf.stringToHclTerraform(this._expiration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input: {
        value: cdktf.listMapperHcl(devicePostureRuleInputToHclTerraform, true)(this._input.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevicePostureRuleInputList",
      },
      match: {
        value: cdktf.listMapperHcl(devicePostureRuleMatchToHclTerraform, true)(this._match.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevicePostureRuleMatchList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
