/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustDevicePostureRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#account_id ZeroTrustDevicePostureRule#account_id}
  */
  readonly accountId: string;
  /**
  * The description of the device posture rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#description ZeroTrustDevicePostureRule#description}
  */
  readonly description?: string;
  /**
  * Sets the expiration time for a posture check result. If empty, the result remains valid until it is overwritten by new data from the WARP client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#expiration ZeroTrustDevicePostureRule#expiration}
  */
  readonly expiration?: string;
  /**
  * The value to be checked against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#input ZeroTrustDevicePostureRule#input}
  */
  readonly input?: ZeroTrustDevicePostureRuleInput;
  /**
  * The conditions that the client must match to run the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#match ZeroTrustDevicePostureRule#match}
  */
  readonly match?: ZeroTrustDevicePostureRuleMatch[] | cdktf.IResolvable;
  /**
  * The name of the device posture rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#name ZeroTrustDevicePostureRule#name}
  */
  readonly name: string;
  /**
  * Polling frequency for the WARP client posture check. Default: `5m` (poll every five minutes). Minimum: `1m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#schedule ZeroTrustDevicePostureRule#schedule}
  */
  readonly schedule?: string;
  /**
  * The type of device posture rule.
  * Available values: "file", "application", "tanium", "gateway", "warp", "disk_encryption", "serial_number", "sentinelone", "carbonblack", "firewall", "os_version", "domain_joined", "client_certificate", "client_certificate_v2", "unique_client_id", "kolide", "tanium_s2s", "crowdstrike_s2s", "intune", "workspace_one", "sentinelone_s2s", "custom_s2s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#type ZeroTrustDevicePostureRule#type}
  */
  readonly type: string;
}
export interface ZeroTrustDevicePostureRuleInputLocations {
  /**
  * List of paths to check for client certificate on linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#paths ZeroTrustDevicePostureRule#paths}
  */
  readonly paths?: string[];
  /**
  * List of trust stores to check for client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#trust_stores ZeroTrustDevicePostureRule#trust_stores}
  */
  readonly trustStores?: string[];
}

export function zeroTrustDevicePostureRuleInputLocationsToTerraform(struct?: ZeroTrustDevicePostureRuleInputLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    trust_stores: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustStores),
  }
}


export function zeroTrustDevicePostureRuleInputLocationsToHclTerraform(struct?: ZeroTrustDevicePostureRuleInputLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trust_stores: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustStores),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDevicePostureRuleInputLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustDevicePostureRuleInputLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._trustStores !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStores = this._trustStores;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDevicePostureRuleInputLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paths = undefined;
      this._trustStores = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paths = value.paths;
      this._trustStores = value.trustStores;
    }
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // trust_stores - computed: false, optional: true, required: false
  private _trustStores?: string[]; 
  public get trustStores() {
    return this.getListAttribute('trust_stores');
  }
  public set trustStores(value: string[]) {
    this._trustStores = value;
  }
  public resetTrustStores() {
    this._trustStores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoresInput() {
    return this._trustStores;
  }
}
export interface ZeroTrustDevicePostureRuleInput {
  /**
  * The Number of active threats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#active_threats ZeroTrustDevicePostureRule#active_threats}
  */
  readonly activeThreats?: number;
  /**
  * UUID of Cloudflare managed certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#certificate_id ZeroTrustDevicePostureRule#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * List of volume names to be checked for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#check_disks ZeroTrustDevicePostureRule#check_disks}
  */
  readonly checkDisks?: string[];
  /**
  * Confirm the certificate was not imported from another device. We recommend keeping this enabled unless the certificate was deployed without a private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#check_private_key ZeroTrustDevicePostureRule#check_private_key}
  */
  readonly checkPrivateKey?: boolean | cdktf.IResolvable;
  /**
  * Common Name that is protected by the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#cn ZeroTrustDevicePostureRule#cn}
  */
  readonly cn?: string;
  /**
  * Compliance Status.
  * Available values: "compliant", "noncompliant", "unknown", "notapplicable", "ingraceperiod", "error".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#compliance_status ZeroTrustDevicePostureRule#compliance_status}
  */
  readonly complianceStatus?: string;
  /**
  * Posture Integration ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#connection_id ZeroTrustDevicePostureRule#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Count Operator.
  * Available values: "<", "<=", ">", ">=", "==".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#count_operator ZeroTrustDevicePostureRule#count_operator}
  */
  readonly countOperator?: string;
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#domain ZeroTrustDevicePostureRule#domain}
  */
  readonly domain?: string;
  /**
  * For more details on eid last seen, refer to the Tanium documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#eid_last_seen ZeroTrustDevicePostureRule#eid_last_seen}
  */
  readonly eidLastSeen?: string;
  /**
  * Enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#enabled ZeroTrustDevicePostureRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not file exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#exists ZeroTrustDevicePostureRule#exists}
  */
  readonly exists?: boolean | cdktf.IResolvable;
  /**
  * List of values indicating purposes for which the certificate public key can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#extended_key_usage ZeroTrustDevicePostureRule#extended_key_usage}
  */
  readonly extendedKeyUsage?: string[];
  /**
  * List ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#id ZeroTrustDevicePostureRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether device is infected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#infected ZeroTrustDevicePostureRule#infected}
  */
  readonly infected?: boolean | cdktf.IResolvable;
  /**
  * Whether device is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#is_active ZeroTrustDevicePostureRule#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * The Number of Issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#issue_count ZeroTrustDevicePostureRule#issue_count}
  */
  readonly issueCount?: string;
  /**
  * For more details on last seen, please refer to the Crowdstrike documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#last_seen ZeroTrustDevicePostureRule#last_seen}
  */
  readonly lastSeen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#locations ZeroTrustDevicePostureRule#locations}
  */
  readonly locations?: ZeroTrustDevicePostureRuleInputLocations;
  /**
  * Network status of device.
  * Available values: "connected", "disconnected", "disconnecting", "connecting".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#network_status ZeroTrustDevicePostureRule#network_status}
  */
  readonly networkStatus?: string;
  /**
  * Operating system.
  * Available values: "windows", "linux", "mac", "android", "ios", "chromeos".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#operating_system ZeroTrustDevicePostureRule#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * Agent operational state.
  * Available values: "na", "partially_disabled", "auto_fully_disabled", "fully_disabled", "auto_partially_disabled", "disabled_error", "db_corruption".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#operational_state ZeroTrustDevicePostureRule#operational_state}
  */
  readonly operationalState?: string;
  /**
  * Operator.
  * Available values: "<", "<=", ">", ">=", "==".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#operator ZeroTrustDevicePostureRule#operator}
  */
  readonly operator?: string;
  /**
  * Os Version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#os ZeroTrustDevicePostureRule#os}
  */
  readonly os?: string;
  /**
  * Operating System Distribution Name (linux only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#os_distro_name ZeroTrustDevicePostureRule#os_distro_name}
  */
  readonly osDistroName?: string;
  /**
  * Version of OS Distribution (linux only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#os_distro_revision ZeroTrustDevicePostureRule#os_distro_revision}
  */
  readonly osDistroRevision?: string;
  /**
  * Additional version data. For Mac or iOS, the Product Version Extra. For Linux, the kernel release version. (Mac, iOS, and Linux only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#os_version_extra ZeroTrustDevicePostureRule#os_version_extra}
  */
  readonly osVersionExtra?: string;
  /**
  * Overall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#overall ZeroTrustDevicePostureRule#overall}
  */
  readonly overall?: string;
  /**
  * File path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#path ZeroTrustDevicePostureRule#path}
  */
  readonly path?: string;
  /**
  * Whether to check all disks for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#require_all ZeroTrustDevicePostureRule#require_all}
  */
  readonly requireAll?: boolean | cdktf.IResolvable;
  /**
  * For more details on risk level, refer to the Tanium documentation.
  * Available values: "low", "medium", "high", "critical".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#risk_level ZeroTrustDevicePostureRule#risk_level}
  */
  readonly riskLevel?: string;
  /**
  * A value between 0-100 assigned to devices set by the 3rd party posture provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#score ZeroTrustDevicePostureRule#score}
  */
  readonly score?: number;
  /**
  * Score Operator.
  * Available values: "<", "<=", ">", ">=", "==".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#score_operator ZeroTrustDevicePostureRule#score_operator}
  */
  readonly scoreOperator?: string;
  /**
  * SensorConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#sensor_config ZeroTrustDevicePostureRule#sensor_config}
  */
  readonly sensorConfig?: string;
  /**
  * SHA-256.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#sha256 ZeroTrustDevicePostureRule#sha256}
  */
  readonly sha256?: string;
  /**
  * For more details on state, please refer to the Crowdstrike documentation.
  * Available values: "online", "offline", "unknown".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#state ZeroTrustDevicePostureRule#state}
  */
  readonly state?: string;
  /**
  * List of certificate Subject Alternative Names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#subject_alternative_names ZeroTrustDevicePostureRule#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: string[];
  /**
  * Signing certificate thumbprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#thumbprint ZeroTrustDevicePostureRule#thumbprint}
  */
  readonly thumbprint?: string;
  /**
  * For more details on total score, refer to the Tanium documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#total_score ZeroTrustDevicePostureRule#total_score}
  */
  readonly totalScore?: number;
  /**
  * Version of OS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#version ZeroTrustDevicePostureRule#version}
  */
  readonly version?: string;
  /**
  * Version Operator.
  * Available values: "<", "<=", ">", ">=", "==".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#version_operator ZeroTrustDevicePostureRule#version_operator}
  */
  readonly versionOperator?: string;
}

export function zeroTrustDevicePostureRuleInputToTerraform(struct?: ZeroTrustDevicePostureRuleInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_threats: cdktf.numberToTerraform(struct!.activeThreats),
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    check_disks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.checkDisks),
    check_private_key: cdktf.booleanToTerraform(struct!.checkPrivateKey),
    cn: cdktf.stringToTerraform(struct!.cn),
    compliance_status: cdktf.stringToTerraform(struct!.complianceStatus),
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    count_operator: cdktf.stringToTerraform(struct!.countOperator),
    domain: cdktf.stringToTerraform(struct!.domain),
    eid_last_seen: cdktf.stringToTerraform(struct!.eidLastSeen),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exists: cdktf.booleanToTerraform(struct!.exists),
    extended_key_usage: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extendedKeyUsage),
    id: cdktf.stringToTerraform(struct!.id),
    infected: cdktf.booleanToTerraform(struct!.infected),
    is_active: cdktf.booleanToTerraform(struct!.isActive),
    issue_count: cdktf.stringToTerraform(struct!.issueCount),
    last_seen: cdktf.stringToTerraform(struct!.lastSeen),
    locations: zeroTrustDevicePostureRuleInputLocationsToTerraform(struct!.locations),
    network_status: cdktf.stringToTerraform(struct!.networkStatus),
    operating_system: cdktf.stringToTerraform(struct!.operatingSystem),
    operational_state: cdktf.stringToTerraform(struct!.operationalState),
    operator: cdktf.stringToTerraform(struct!.operator),
    os: cdktf.stringToTerraform(struct!.os),
    os_distro_name: cdktf.stringToTerraform(struct!.osDistroName),
    os_distro_revision: cdktf.stringToTerraform(struct!.osDistroRevision),
    os_version_extra: cdktf.stringToTerraform(struct!.osVersionExtra),
    overall: cdktf.stringToTerraform(struct!.overall),
    path: cdktf.stringToTerraform(struct!.path),
    require_all: cdktf.booleanToTerraform(struct!.requireAll),
    risk_level: cdktf.stringToTerraform(struct!.riskLevel),
    score: cdktf.numberToTerraform(struct!.score),
    score_operator: cdktf.stringToTerraform(struct!.scoreOperator),
    sensor_config: cdktf.stringToTerraform(struct!.sensorConfig),
    sha256: cdktf.stringToTerraform(struct!.sha256),
    state: cdktf.stringToTerraform(struct!.state),
    subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAlternativeNames),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    total_score: cdktf.numberToTerraform(struct!.totalScore),
    version: cdktf.stringToTerraform(struct!.version),
    version_operator: cdktf.stringToTerraform(struct!.versionOperator),
  }
}


export function zeroTrustDevicePostureRuleInputToHclTerraform(struct?: ZeroTrustDevicePostureRuleInput | cdktf.IResolvable): any {
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
      type: "list",
      storageClassType: "stringList",
    },
    check_private_key: {
      value: cdktf.booleanToHclTerraform(struct!.checkPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    extended_key_usage: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extendedKeyUsage),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    last_seen: {
      value: cdktf.stringToHclTerraform(struct!.lastSeen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locations: {
      value: zeroTrustDevicePostureRuleInputLocationsToHclTerraform(struct!.locations),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustDevicePostureRuleInputLocations",
    },
    network_status: {
      value: cdktf.stringToHclTerraform(struct!.networkStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_system: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operational_state: {
      value: cdktf.stringToHclTerraform(struct!.operationalState),
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
    os_version_extra: {
      value: cdktf.stringToHclTerraform(struct!.osVersionExtra),
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
    score: {
      value: cdktf.numberToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    score_operator: {
      value: cdktf.stringToHclTerraform(struct!.scoreOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alternative_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAlternativeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ZeroTrustDevicePostureRuleInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustDevicePostureRuleInput | cdktf.IResolvable | undefined {
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
    if (this._checkPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPrivateKey = this._checkPrivateKey;
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
    if (this._extendedKeyUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedKeyUsage = this._extendedKeyUsage;
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
    if (this._lastSeen !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastSeen = this._lastSeen;
    }
    if (this._locations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations?.internalValue;
    }
    if (this._networkStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkStatus = this._networkStatus;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._operationalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationalState = this._operationalState;
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
    if (this._osVersionExtra !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersionExtra = this._osVersionExtra;
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
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    if (this._scoreOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.scoreOperator = this._scoreOperator;
    }
    if (this._sensorConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensorConfig = this._sensorConfig;
    }
    if (this._sha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256 = this._sha256;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._subjectAlternativeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames;
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

  public set internalValue(value: ZeroTrustDevicePostureRuleInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeThreats = undefined;
      this._certificateId = undefined;
      this._checkDisks = undefined;
      this._checkPrivateKey = undefined;
      this._cn = undefined;
      this._complianceStatus = undefined;
      this._connectionId = undefined;
      this._countOperator = undefined;
      this._domain = undefined;
      this._eidLastSeen = undefined;
      this._enabled = undefined;
      this._exists = undefined;
      this._extendedKeyUsage = undefined;
      this._id = undefined;
      this._infected = undefined;
      this._isActive = undefined;
      this._issueCount = undefined;
      this._lastSeen = undefined;
      this._locations.internalValue = undefined;
      this._networkStatus = undefined;
      this._operatingSystem = undefined;
      this._operationalState = undefined;
      this._operator = undefined;
      this._os = undefined;
      this._osDistroName = undefined;
      this._osDistroRevision = undefined;
      this._osVersionExtra = undefined;
      this._overall = undefined;
      this._path = undefined;
      this._requireAll = undefined;
      this._riskLevel = undefined;
      this._score = undefined;
      this._scoreOperator = undefined;
      this._sensorConfig = undefined;
      this._sha256 = undefined;
      this._state = undefined;
      this._subjectAlternativeNames = undefined;
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
      this._checkPrivateKey = value.checkPrivateKey;
      this._cn = value.cn;
      this._complianceStatus = value.complianceStatus;
      this._connectionId = value.connectionId;
      this._countOperator = value.countOperator;
      this._domain = value.domain;
      this._eidLastSeen = value.eidLastSeen;
      this._enabled = value.enabled;
      this._exists = value.exists;
      this._extendedKeyUsage = value.extendedKeyUsage;
      this._id = value.id;
      this._infected = value.infected;
      this._isActive = value.isActive;
      this._issueCount = value.issueCount;
      this._lastSeen = value.lastSeen;
      this._locations.internalValue = value.locations;
      this._networkStatus = value.networkStatus;
      this._operatingSystem = value.operatingSystem;
      this._operationalState = value.operationalState;
      this._operator = value.operator;
      this._os = value.os;
      this._osDistroName = value.osDistroName;
      this._osDistroRevision = value.osDistroRevision;
      this._osVersionExtra = value.osVersionExtra;
      this._overall = value.overall;
      this._path = value.path;
      this._requireAll = value.requireAll;
      this._riskLevel = value.riskLevel;
      this._score = value.score;
      this._scoreOperator = value.scoreOperator;
      this._sensorConfig = value.sensorConfig;
      this._sha256 = value.sha256;
      this._state = value.state;
      this._subjectAlternativeNames = value.subjectAlternativeNames;
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
    return this.getListAttribute('check_disks');
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

  // check_private_key - computed: false, optional: true, required: false
  private _checkPrivateKey?: boolean | cdktf.IResolvable; 
  public get checkPrivateKey() {
    return this.getBooleanAttribute('check_private_key');
  }
  public set checkPrivateKey(value: boolean | cdktf.IResolvable) {
    this._checkPrivateKey = value;
  }
  public resetCheckPrivateKey() {
    this._checkPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPrivateKeyInput() {
    return this._checkPrivateKey;
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

  // enabled - computed: false, optional: true, required: false
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

  // exists - computed: false, optional: true, required: false
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

  // extended_key_usage - computed: false, optional: true, required: false
  private _extendedKeyUsage?: string[]; 
  public get extendedKeyUsage() {
    return this.getListAttribute('extended_key_usage');
  }
  public set extendedKeyUsage(value: string[]) {
    this._extendedKeyUsage = value;
  }
  public resetExtendedKeyUsage() {
    this._extendedKeyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage;
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

  // infected - computed: false, optional: true, required: false
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

  // is_active - computed: false, optional: true, required: false
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

  // last_seen - computed: false, optional: true, required: false
  private _lastSeen?: string; 
  public get lastSeen() {
    return this.getStringAttribute('last_seen');
  }
  public set lastSeen(value: string) {
    this._lastSeen = value;
  }
  public resetLastSeen() {
    this._lastSeen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSeenInput() {
    return this._lastSeen;
  }

  // locations - computed: false, optional: true, required: false
  private _locations = new ZeroTrustDevicePostureRuleInputLocationsOutputReference(this, "locations");
  public get locations() {
    return this._locations;
  }
  public putLocations(value: ZeroTrustDevicePostureRuleInputLocations) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
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

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // operational_state - computed: false, optional: true, required: false
  private _operationalState?: string; 
  public get operationalState() {
    return this.getStringAttribute('operational_state');
  }
  public set operationalState(value: string) {
    this._operationalState = value;
  }
  public resetOperationalState() {
    this._operationalState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalStateInput() {
    return this._operationalState;
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

  // os_version_extra - computed: false, optional: true, required: false
  private _osVersionExtra?: string; 
  public get osVersionExtra() {
    return this.getStringAttribute('os_version_extra');
  }
  public set osVersionExtra(value: string) {
    this._osVersionExtra = value;
  }
  public resetOsVersionExtra() {
    this._osVersionExtra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionExtraInput() {
    return this._osVersionExtra;
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

  // require_all - computed: false, optional: true, required: false
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

  // score - computed: false, optional: true, required: false
  private _score?: number; 
  public get score() {
    return this.getNumberAttribute('score');
  }
  public set score(value: number) {
    this._score = value;
  }
  public resetScore() {
    this._score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }

  // score_operator - computed: false, optional: true, required: false
  private _scoreOperator?: string; 
  public get scoreOperator() {
    return this.getStringAttribute('score_operator');
  }
  public set scoreOperator(value: string) {
    this._scoreOperator = value;
  }
  public resetScoreOperator() {
    this._scoreOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreOperatorInput() {
    return this._scoreOperator;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames?: string[]; 
  public get subjectAlternativeNames() {
    return this.getListAttribute('subject_alternative_names');
  }
  public set subjectAlternativeNames(value: string[]) {
    this._subjectAlternativeNames = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames;
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
export interface ZeroTrustDevicePostureRuleMatch {
  /**
  * Available values: "windows", "mac", "linux", "android", "ios", "chromeos".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#platform ZeroTrustDevicePostureRule#platform}
  */
  readonly platform?: string;
}

export function zeroTrustDevicePostureRuleMatchToTerraform(struct?: ZeroTrustDevicePostureRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    platform: cdktf.stringToTerraform(struct!.platform),
  }
}


export function zeroTrustDevicePostureRuleMatchToHclTerraform(struct?: ZeroTrustDevicePostureRuleMatch | cdktf.IResolvable): any {
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

export class ZeroTrustDevicePostureRuleMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustDevicePostureRuleMatch | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustDevicePostureRuleMatch | cdktf.IResolvable | undefined) {
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

export class ZeroTrustDevicePostureRuleMatchList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustDevicePostureRuleMatch[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustDevicePostureRuleMatchOutputReference {
    return new ZeroTrustDevicePostureRuleMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule}
*/
export class ZeroTrustDevicePostureRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_device_posture_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustDevicePostureRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustDevicePostureRule to import
  * @param importFromId The id of the existing ZeroTrustDevicePostureRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustDevicePostureRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_posture_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustDevicePostureRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustDevicePostureRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_device_posture_rule',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.1',
        providerVersionConstraint: '~> 5.0'
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
    this._input.internalValue = config.input;
    this._match.internalValue = config.match;
    this._name = config.name;
    this._schedule = config.schedule;
    this._type = config.type;
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

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input - computed: false, optional: true, required: false
  private _input = new ZeroTrustDevicePostureRuleInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: ZeroTrustDevicePostureRuleInput) {
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
  private _match = new ZeroTrustDevicePostureRuleMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: ZeroTrustDevicePostureRuleMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      expiration: cdktf.stringToTerraform(this._expiration),
      input: zeroTrustDevicePostureRuleInputToTerraform(this._input.internalValue),
      match: cdktf.listMapper(zeroTrustDevicePostureRuleMatchToTerraform, false)(this._match.internalValue),
      name: cdktf.stringToTerraform(this._name),
      schedule: cdktf.stringToTerraform(this._schedule),
      type: cdktf.stringToTerraform(this._type),
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
      input: {
        value: zeroTrustDevicePostureRuleInputToHclTerraform(this._input.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustDevicePostureRuleInput",
      },
      match: {
        value: cdktf.listMapperHcl(zeroTrustDevicePostureRuleMatchToHclTerraform, false)(this._match.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustDevicePostureRuleMatchList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
