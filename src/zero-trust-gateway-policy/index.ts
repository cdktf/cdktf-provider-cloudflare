/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustGatewayPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#account_id ZeroTrustGatewayPolicy#account_id}
  */
  readonly accountId: string;
  /**
  * The action to perform when the associated traffic, identity, and device posture expressions are either absent or evaluate to `true`.
  * Available values: "on", "off", "allow", "block", "scan", "noscan", "safesearch", "ytrestricted", "isolate", "noisolate", "override", "l4_override", "egress", "resolve", "quarantine", "redirect".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#action ZeroTrustGatewayPolicy#action}
  */
  readonly action: string;
  /**
  * The description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#description ZeroTrustGatewayPolicy#description}
  */
  readonly description?: string;
  /**
  * The wirefilter expression used for device posture check matching. The API automatically formats and sanitizes this expression. This returns a normalized version that may differ from your input and cause Terraform state drift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#device_posture ZeroTrustGatewayPolicy#device_posture}
  */
  readonly devicePosture?: string;
  /**
  * True if the rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The expiration time stamp and default duration of a DNS policy. Takes
  * precedence over the policy's `schedule` configuration, if any.
  * 
  * This does not apply to HTTP or network policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#expiration ZeroTrustGatewayPolicy#expiration}
  */
  readonly expiration?: ZeroTrustGatewayPolicyExpiration;
  /**
  * The protocol or layer to evaluate the traffic, identity, and device posture expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#filters ZeroTrustGatewayPolicy#filters}
  */
  readonly filters?: string[];
  /**
  * The wirefilter expression used for identity matching. The API automatically formats and sanitizes this expression. This returns a normalized version that may differ from your input and cause Terraform state drift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#identity ZeroTrustGatewayPolicy#identity}
  */
  readonly identity?: string;
  /**
  * The name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#name ZeroTrustGatewayPolicy#name}
  */
  readonly name: string;
  /**
  * Precedence sets the order of your rules. Lower values indicate higher precedence. At each processing phase, applicable rules are evaluated in ascending order of this value. Refer to [Order of enforcement](http://developers.cloudflare.com/learning-paths/secure-internet-traffic/understand-policies/order-of-enforcement/#manage-precedence-with-terraform) docs on how to manage precedence via Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#precedence ZeroTrustGatewayPolicy#precedence}
  */
  readonly precedence?: number;
  /**
  * Additional settings that modify the rule's action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#rule_settings ZeroTrustGatewayPolicy#rule_settings}
  */
  readonly ruleSettings?: ZeroTrustGatewayPolicyRuleSettings;
  /**
  * The schedule for activating DNS policies. This does not apply to HTTP or network policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#schedule ZeroTrustGatewayPolicy#schedule}
  */
  readonly schedule?: ZeroTrustGatewayPolicySchedule;
  /**
  * The wirefilter expression used for traffic matching. The API automatically formats and sanitizes this expression. This returns a normalized version that may differ from your input and cause Terraform state drift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#traffic ZeroTrustGatewayPolicy#traffic}
  */
  readonly traffic?: string;
}
export interface ZeroTrustGatewayPolicyExpiration {
  /**
  * The default duration a policy will be active in minutes. Must be set in order to use the `reset_expiration` endpoint on this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#duration ZeroTrustGatewayPolicy#duration}
  */
  readonly duration?: number;
  /**
  * The time stamp at which the policy will expire and cease to be
  * applied.
  * 
  * Must adhere to RFC 3339 and include a UTC offset. Non-zero
  * offsets are accepted but will be converted to the equivalent
  * value with offset zero (UTC+00:00) and will be returned as time
  * stamps with offset zero denoted by a trailing 'Z'.
  * 
  * Policies with an expiration do not consider the timezone of
  * clients they are applied to, and expire "globally" at the point
  * given by their `expires_at` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#expires_at ZeroTrustGatewayPolicy#expires_at}
  */
  readonly expiresAt: string;
}

export function zeroTrustGatewayPolicyExpirationToTerraform(struct?: ZeroTrustGatewayPolicyExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    expires_at: cdktf.stringToTerraform(struct!.expiresAt),
  }
}


export function zeroTrustGatewayPolicyExpirationToHclTerraform(struct?: ZeroTrustGatewayPolicyExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expires_at: {
      value: cdktf.stringToHclTerraform(struct!.expiresAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayPolicyExpiration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._expiresAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiresAt = this._expiresAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyExpiration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._expiresAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._expiresAt = value.expiresAt;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // expires_at - computed: true, optional: false, required: true
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsAuditSsh {
  /**
  * Enable to turn on SSH command logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#command_logging ZeroTrustGatewayPolicy#command_logging}
  */
  readonly commandLogging?: boolean | cdktf.IResolvable;
}

export function zeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsAuditSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_logging: cdktf.booleanToTerraform(struct!.commandLogging),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsAuditSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_logging: {
      value: cdktf.booleanToHclTerraform(struct!.commandLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsAuditSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandLogging = this._commandLogging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsAuditSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commandLogging = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commandLogging = value.commandLogging;
    }
  }

  // command_logging - computed: true, optional: true, required: false
  private _commandLogging?: boolean | cdktf.IResolvable; 
  public get commandLogging() {
    return this.getBooleanAttribute('command_logging');
  }
  public set commandLogging(value: boolean | cdktf.IResolvable) {
    this._commandLogging = value;
  }
  public resetCommandLogging() {
    this._commandLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLoggingInput() {
    return this._commandLogging;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls {
  /**
  * Configure whether copy is enabled or not. When set with "remote_only", copying isolated content from the remote browser to the user's local clipboard is disabled. When absent, copy is enabled. Only applies when `version == "v2"`.
  * Available values: "enabled", "disabled", "remote_only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#copy ZeroTrustGatewayPolicy#copy}
  */
  readonly copy?: string;
  /**
  * Set to false to enable copy-pasting. Only applies when `version == "v1"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#dcp ZeroTrustGatewayPolicy#dcp}
  */
  readonly dcp?: boolean | cdktf.IResolvable;
  /**
  * Set to false to enable downloading. Only applies when `version == "v1"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#dd ZeroTrustGatewayPolicy#dd}
  */
  readonly dd?: boolean | cdktf.IResolvable;
  /**
  * Set to false to enable keyboard usage. Only applies when `version == "v1"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#dk ZeroTrustGatewayPolicy#dk}
  */
  readonly dk?: boolean | cdktf.IResolvable;
  /**
  * Configure whether downloading enabled or not. When set with "remote_only", downloads are only available for viewing. Only applies when `version == "v2"`.
  * Available values: "enabled", "disabled", "remote_only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#download ZeroTrustGatewayPolicy#download}
  */
  readonly download?: string;
  /**
  * Set to false to enable printing. Only applies when `version == "v1"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#dp ZeroTrustGatewayPolicy#dp}
  */
  readonly dp?: boolean | cdktf.IResolvable;
  /**
  * Set to false to enable uploading. Only applies when `version == "v1"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#du ZeroTrustGatewayPolicy#du}
  */
  readonly du?: boolean | cdktf.IResolvable;
  /**
  * Configure whether keyboard usage is enabled or not. When absent, keyboard usage is enabled. Only applies when `version == "v2"`.
  * Available values: "enabled", "disabled".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#keyboard ZeroTrustGatewayPolicy#keyboard}
  */
  readonly keyboard?: string;
  /**
  * Configure whether pasting is enabled or not. When set with "remote_only", pasting content from the user's local clipboard into isolated pages is disabled. When absent, paste is enabled. Only applies when `version == "v2"`.
  * Available values: "enabled", "disabled", "remote_only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#paste ZeroTrustGatewayPolicy#paste}
  */
  readonly paste?: string;
  /**
  * Configure whether printing is enabled or not. When absent, printing is enabled. Only applies when `version == "v2"`.
  * Available values: "enabled", "disabled".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#printing ZeroTrustGatewayPolicy#printing}
  */
  readonly printing?: string;
  /**
  * Configure whether uploading is enabled or not. When absent, uploading is enabled. Only applies when `version == "v2"`.
  * Available values: "enabled", "disabled".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#upload ZeroTrustGatewayPolicy#upload}
  */
  readonly upload?: string;
  /**
  * Indicates which version of the browser isolation controls should apply.
  * Available values: "v1", "v2".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#version ZeroTrustGatewayPolicy#version}
  */
  readonly version?: string;
}

export function zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy: cdktf.stringToTerraform(struct!.copy),
    dcp: cdktf.booleanToTerraform(struct!.dcp),
    dd: cdktf.booleanToTerraform(struct!.dd),
    dk: cdktf.booleanToTerraform(struct!.dk),
    download: cdktf.stringToTerraform(struct!.download),
    dp: cdktf.booleanToTerraform(struct!.dp),
    du: cdktf.booleanToTerraform(struct!.du),
    keyboard: cdktf.stringToTerraform(struct!.keyboard),
    paste: cdktf.stringToTerraform(struct!.paste),
    printing: cdktf.stringToTerraform(struct!.printing),
    upload: cdktf.stringToTerraform(struct!.upload),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copy: {
      value: cdktf.stringToHclTerraform(struct!.copy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dcp: {
      value: cdktf.booleanToHclTerraform(struct!.dcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dd: {
      value: cdktf.booleanToHclTerraform(struct!.dd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dk: {
      value: cdktf.booleanToHclTerraform(struct!.dk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    download: {
      value: cdktf.stringToHclTerraform(struct!.download),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp: {
      value: cdktf.booleanToHclTerraform(struct!.dp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    du: {
      value: cdktf.booleanToHclTerraform(struct!.du),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keyboard: {
      value: cdktf.stringToHclTerraform(struct!.keyboard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paste: {
      value: cdktf.stringToHclTerraform(struct!.paste),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    printing: {
      value: cdktf.stringToHclTerraform(struct!.printing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload: {
      value: cdktf.stringToHclTerraform(struct!.upload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copy !== undefined) {
      hasAnyValues = true;
      internalValueResult.copy = this._copy;
    }
    if (this._dcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcp = this._dcp;
    }
    if (this._dd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dd = this._dd;
    }
    if (this._dk !== undefined) {
      hasAnyValues = true;
      internalValueResult.dk = this._dk;
    }
    if (this._download !== undefined) {
      hasAnyValues = true;
      internalValueResult.download = this._download;
    }
    if (this._dp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dp = this._dp;
    }
    if (this._du !== undefined) {
      hasAnyValues = true;
      internalValueResult.du = this._du;
    }
    if (this._keyboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyboard = this._keyboard;
    }
    if (this._paste !== undefined) {
      hasAnyValues = true;
      internalValueResult.paste = this._paste;
    }
    if (this._printing !== undefined) {
      hasAnyValues = true;
      internalValueResult.printing = this._printing;
    }
    if (this._upload !== undefined) {
      hasAnyValues = true;
      internalValueResult.upload = this._upload;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copy = undefined;
      this._dcp = undefined;
      this._dd = undefined;
      this._dk = undefined;
      this._download = undefined;
      this._dp = undefined;
      this._du = undefined;
      this._keyboard = undefined;
      this._paste = undefined;
      this._printing = undefined;
      this._upload = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copy = value.copy;
      this._dcp = value.dcp;
      this._dd = value.dd;
      this._dk = value.dk;
      this._download = value.download;
      this._dp = value.dp;
      this._du = value.du;
      this._keyboard = value.keyboard;
      this._paste = value.paste;
      this._printing = value.printing;
      this._upload = value.upload;
      this._version = value.version;
    }
  }

  // copy - computed: true, optional: true, required: false
  private _copy?: string; 
  public get copy() {
    return this.getStringAttribute('copy');
  }
  public set copy(value: string) {
    this._copy = value;
  }
  public resetCopy() {
    this._copy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyInput() {
    return this._copy;
  }

  // dcp - computed: true, optional: true, required: false
  private _dcp?: boolean | cdktf.IResolvable; 
  public get dcp() {
    return this.getBooleanAttribute('dcp');
  }
  public set dcp(value: boolean | cdktf.IResolvable) {
    this._dcp = value;
  }
  public resetDcp() {
    this._dcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcpInput() {
    return this._dcp;
  }

  // dd - computed: true, optional: true, required: false
  private _dd?: boolean | cdktf.IResolvable; 
  public get dd() {
    return this.getBooleanAttribute('dd');
  }
  public set dd(value: boolean | cdktf.IResolvable) {
    this._dd = value;
  }
  public resetDd() {
    this._dd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddInput() {
    return this._dd;
  }

  // dk - computed: true, optional: true, required: false
  private _dk?: boolean | cdktf.IResolvable; 
  public get dk() {
    return this.getBooleanAttribute('dk');
  }
  public set dk(value: boolean | cdktf.IResolvable) {
    this._dk = value;
  }
  public resetDk() {
    this._dk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dkInput() {
    return this._dk;
  }

  // download - computed: true, optional: true, required: false
  private _download?: string; 
  public get download() {
    return this.getStringAttribute('download');
  }
  public set download(value: string) {
    this._download = value;
  }
  public resetDownload() {
    this._download = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadInput() {
    return this._download;
  }

  // dp - computed: true, optional: true, required: false
  private _dp?: boolean | cdktf.IResolvable; 
  public get dp() {
    return this.getBooleanAttribute('dp');
  }
  public set dp(value: boolean | cdktf.IResolvable) {
    this._dp = value;
  }
  public resetDp() {
    this._dp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpInput() {
    return this._dp;
  }

  // du - computed: true, optional: true, required: false
  private _du?: boolean | cdktf.IResolvable; 
  public get du() {
    return this.getBooleanAttribute('du');
  }
  public set du(value: boolean | cdktf.IResolvable) {
    this._du = value;
  }
  public resetDu() {
    this._du = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duInput() {
    return this._du;
  }

  // keyboard - computed: true, optional: true, required: false
  private _keyboard?: string; 
  public get keyboard() {
    return this.getStringAttribute('keyboard');
  }
  public set keyboard(value: string) {
    this._keyboard = value;
  }
  public resetKeyboard() {
    this._keyboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyboardInput() {
    return this._keyboard;
  }

  // paste - computed: true, optional: true, required: false
  private _paste?: string; 
  public get paste() {
    return this.getStringAttribute('paste');
  }
  public set paste(value: string) {
    this._paste = value;
  }
  public resetPaste() {
    this._paste = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pasteInput() {
    return this._paste;
  }

  // printing - computed: true, optional: true, required: false
  private _printing?: string; 
  public get printing() {
    return this.getStringAttribute('printing');
  }
  public set printing(value: string) {
    this._printing = value;
  }
  public resetPrinting() {
    this._printing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get printingInput() {
    return this._printing;
  }

  // upload - computed: true, optional: true, required: false
  private _upload?: string; 
  public get upload() {
    return this.getStringAttribute('upload');
  }
  public set upload(value: string) {
    this._upload = value;
  }
  public resetUpload() {
    this._upload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInput() {
    return this._upload;
  }

  // version - computed: true, optional: true, required: false
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
}
export interface ZeroTrustGatewayPolicyRuleSettingsBlockPage {
  /**
  * If true, context information will be passed as query parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#include_context ZeroTrustGatewayPolicy#include_context}
  */
  readonly includeContext?: boolean | cdktf.IResolvable;
  /**
  * URI to which the user will be redirected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#target_uri ZeroTrustGatewayPolicy#target_uri}
  */
  readonly targetUri: string;
}

export function zeroTrustGatewayPolicyRuleSettingsBlockPageToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsBlockPage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_context: cdktf.booleanToTerraform(struct!.includeContext),
    target_uri: cdktf.stringToTerraform(struct!.targetUri),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsBlockPageToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsBlockPage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_context: {
      value: cdktf.booleanToHclTerraform(struct!.includeContext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_uri: {
      value: cdktf.stringToHclTerraform(struct!.targetUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsBlockPage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeContext = this._includeContext;
    }
    if (this._targetUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUri = this._targetUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsBlockPage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeContext = undefined;
      this._targetUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeContext = value.includeContext;
      this._targetUri = value.targetUri;
    }
  }

  // include_context - computed: true, optional: true, required: false
  private _includeContext?: boolean | cdktf.IResolvable; 
  public get includeContext() {
    return this.getBooleanAttribute('include_context');
  }
  public set includeContext(value: boolean | cdktf.IResolvable) {
    this._includeContext = value;
  }
  public resetIncludeContext() {
    this._includeContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeContextInput() {
    return this._includeContext;
  }

  // target_uri - computed: true, optional: false, required: true
  private _targetUri?: string; 
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }
  public set targetUri(value: string) {
    this._targetUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUriInput() {
    return this._targetUri;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsCheckSession {
  /**
  * Configure how fresh the session needs to be to be considered valid. The API automatically formats and sanitizes this expression. This returns a normalized version that may differ from your input and cause Terraform state drift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#duration ZeroTrustGatewayPolicy#duration}
  */
  readonly duration?: string;
  /**
  * Set to true to enable session enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#enforce ZeroTrustGatewayPolicy#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
}

export function zeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsCheckSession | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    enforce: cdktf.booleanToTerraform(struct!.enforce),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsCheckSession | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforce: {
      value: cdktf.booleanToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsCheckSession | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsCheckSession | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._enforce = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._enforce = value.enforce;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enforce - computed: true, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 {
  /**
  * IPv4 address of upstream resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#ip ZeroTrustGatewayPolicy#ip}
  */
  readonly ip: string;
  /**
  * A port number to use for upstream resolver. Defaults to 53 if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#port ZeroTrustGatewayPolicy#port}
  */
  readonly port?: number;
  /**
  * Whether to connect to this resolver over a private network. Must be set when vnet_id is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#route_through_private_network ZeroTrustGatewayPolicy#route_through_private_network}
  */
  readonly routeThroughPrivateNetwork?: boolean | cdktf.IResolvable;
  /**
  * Optionally specify a virtual network for this resolver. Uses default virtual network id if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#vnet_id ZeroTrustGatewayPolicy#vnet_id}
  */
  readonly vnetId?: string;
}

export function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
    route_through_private_network: cdktf.booleanToTerraform(struct!.routeThroughPrivateNetwork),
    vnet_id: cdktf.stringToTerraform(struct!.vnetId),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_through_private_network: {
      value: cdktf.booleanToHclTerraform(struct!.routeThroughPrivateNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vnet_id: {
      value: cdktf.stringToHclTerraform(struct!.vnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._routeThroughPrivateNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeThroughPrivateNetwork = this._routeThroughPrivateNetwork;
    }
    if (this._vnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetId = this._vnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
      this._routeThroughPrivateNetwork = undefined;
      this._vnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
      this._routeThroughPrivateNetwork = value.routeThroughPrivateNetwork;
      this._vnetId = value.vnetId;
    }
  }

  // ip - computed: true, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // route_through_private_network - computed: true, optional: true, required: false
  private _routeThroughPrivateNetwork?: boolean | cdktf.IResolvable; 
  public get routeThroughPrivateNetwork() {
    return this.getBooleanAttribute('route_through_private_network');
  }
  public set routeThroughPrivateNetwork(value: boolean | cdktf.IResolvable) {
    this._routeThroughPrivateNetwork = value;
  }
  public resetRouteThroughPrivateNetwork() {
    this._routeThroughPrivateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeThroughPrivateNetworkInput() {
    return this._routeThroughPrivateNetwork;
  }

  // vnet_id - computed: true, optional: true, required: false
  private _vnetId?: string; 
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
  public set vnetId(value: string) {
    this._vnetId = value;
  }
  public resetVnetId() {
    this._vnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIdInput() {
    return this._vnetId;
  }
}

export class ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List extends cdktf.ComplexList {
  public internalValue? : ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference {
    return new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 {
  /**
  * IPv6 address of upstream resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#ip ZeroTrustGatewayPolicy#ip}
  */
  readonly ip: string;
  /**
  * A port number to use for upstream resolver. Defaults to 53 if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#port ZeroTrustGatewayPolicy#port}
  */
  readonly port?: number;
  /**
  * Whether to connect to this resolver over a private network. Must be set when vnet_id is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#route_through_private_network ZeroTrustGatewayPolicy#route_through_private_network}
  */
  readonly routeThroughPrivateNetwork?: boolean | cdktf.IResolvable;
  /**
  * Optionally specify a virtual network for this resolver. Uses default virtual network id if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#vnet_id ZeroTrustGatewayPolicy#vnet_id}
  */
  readonly vnetId?: string;
}

export function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
    route_through_private_network: cdktf.booleanToTerraform(struct!.routeThroughPrivateNetwork),
    vnet_id: cdktf.stringToTerraform(struct!.vnetId),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_through_private_network: {
      value: cdktf.booleanToHclTerraform(struct!.routeThroughPrivateNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vnet_id: {
      value: cdktf.stringToHclTerraform(struct!.vnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._routeThroughPrivateNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeThroughPrivateNetwork = this._routeThroughPrivateNetwork;
    }
    if (this._vnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetId = this._vnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
      this._routeThroughPrivateNetwork = undefined;
      this._vnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
      this._routeThroughPrivateNetwork = value.routeThroughPrivateNetwork;
      this._vnetId = value.vnetId;
    }
  }

  // ip - computed: true, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // route_through_private_network - computed: true, optional: true, required: false
  private _routeThroughPrivateNetwork?: boolean | cdktf.IResolvable; 
  public get routeThroughPrivateNetwork() {
    return this.getBooleanAttribute('route_through_private_network');
  }
  public set routeThroughPrivateNetwork(value: boolean | cdktf.IResolvable) {
    this._routeThroughPrivateNetwork = value;
  }
  public resetRouteThroughPrivateNetwork() {
    this._routeThroughPrivateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeThroughPrivateNetworkInput() {
    return this._routeThroughPrivateNetwork;
  }

  // vnet_id - computed: true, optional: true, required: false
  private _vnetId?: string; 
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
  public set vnetId(value: string) {
    this._vnetId = value;
  }
  public resetVnetId() {
    this._vnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIdInput() {
    return this._vnetId;
  }
}

export class ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List extends cdktf.ComplexList {
  public internalValue? : ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference {
    return new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsDnsResolvers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#ipv4 ZeroTrustGatewayPolicy#ipv4}
  */
  readonly ipv4?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#ipv6 ZeroTrustGatewayPolicy#ipv6}
  */
  readonly ipv6?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6[] | cdktf.IResolvable;
}

export function zeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform, false)(struct!.ipv4),
    ipv6: cdktf.listMapper(zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform, false)(struct!.ipv6),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform, false)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform, false)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsDnsResolvers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4 = new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6 = new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsEgress {
  /**
  * The IPv4 address to be used for egress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#ipv4 ZeroTrustGatewayPolicy#ipv4}
  */
  readonly ipv4?: string;
  /**
  * The fallback IPv4 address to be used for egress in the event of an error egressing with the primary IPv4. Can be '0.0.0.0' to indicate local egress via WARP IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#ipv4_fallback ZeroTrustGatewayPolicy#ipv4_fallback}
  */
  readonly ipv4Fallback?: string;
  /**
  * The IPv6 range to be used for egress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#ipv6 ZeroTrustGatewayPolicy#ipv6}
  */
  readonly ipv6?: string;
}

export function zeroTrustGatewayPolicyRuleSettingsEgressToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv4_fallback: cdktf.stringToTerraform(struct!.ipv4Fallback),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_fallback: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Fallback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv4Fallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Fallback = this._ipv4Fallback;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv4Fallback = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv4Fallback = value.ipv4Fallback;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv4_fallback - computed: true, optional: true, required: false
  private _ipv4Fallback?: string; 
  public get ipv4Fallback() {
    return this.getStringAttribute('ipv4_fallback');
  }
  public set ipv4Fallback(value: string) {
    this._ipv4Fallback = value;
  }
  public resetIpv4Fallback() {
    this._ipv4Fallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FallbackInput() {
    return this._ipv4Fallback;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsL4Override {
  /**
  * IPv4 or IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#ip ZeroTrustGatewayPolicy#ip}
  */
  readonly ip?: string;
  /**
  * A port number to use for TCP/UDP overrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#port ZeroTrustGatewayPolicy#port}
  */
  readonly port?: number;
}

export function zeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsL4Override | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsL4Override | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsL4Override | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsL4Override | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
    }
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsNotificationSettings {
  /**
  * Set notification on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If true, context information will be passed as query parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#include_context ZeroTrustGatewayPolicy#include_context}
  */
  readonly includeContext?: boolean | cdktf.IResolvable;
  /**
  * Customize the message shown in the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#msg ZeroTrustGatewayPolicy#msg}
  */
  readonly msg?: string;
  /**
  * Optional URL to direct users to additional information. If not set, the notification will open a block page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#support_url ZeroTrustGatewayPolicy#support_url}
  */
  readonly supportUrl?: string;
}

export function zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    include_context: cdktf.booleanToTerraform(struct!.includeContext),
    msg: cdktf.stringToTerraform(struct!.msg),
    support_url: cdktf.stringToTerraform(struct!.supportUrl),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_context: {
      value: cdktf.booleanToHclTerraform(struct!.includeContext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    msg: {
      value: cdktf.stringToHclTerraform(struct!.msg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_url: {
      value: cdktf.stringToHclTerraform(struct!.supportUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsNotificationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._includeContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeContext = this._includeContext;
    }
    if (this._msg !== undefined) {
      hasAnyValues = true;
      internalValueResult.msg = this._msg;
    }
    if (this._supportUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportUrl = this._supportUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._includeContext = undefined;
      this._msg = undefined;
      this._supportUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._includeContext = value.includeContext;
      this._msg = value.msg;
      this._supportUrl = value.supportUrl;
    }
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

  // include_context - computed: true, optional: true, required: false
  private _includeContext?: boolean | cdktf.IResolvable; 
  public get includeContext() {
    return this.getBooleanAttribute('include_context');
  }
  public set includeContext(value: boolean | cdktf.IResolvable) {
    this._includeContext = value;
  }
  public resetIncludeContext() {
    this._includeContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeContextInput() {
    return this._includeContext;
  }

  // msg - computed: true, optional: true, required: false
  private _msg?: string; 
  public get msg() {
    return this.getStringAttribute('msg');
  }
  public set msg(value: string) {
    this._msg = value;
  }
  public resetMsg() {
    this._msg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgInput() {
    return this._msg;
  }

  // support_url - computed: true, optional: true, required: false
  private _supportUrl?: string; 
  public get supportUrl() {
    return this.getStringAttribute('support_url');
  }
  public set supportUrl(value: string) {
    this._supportUrl = value;
  }
  public resetSupportUrl() {
    this._supportUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportUrlInput() {
    return this._supportUrl;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsPayloadLog {
  /**
  * Set to true to enable DLP payload logging for this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function zeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsPayloadLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsPayloadLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsPayloadLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsPayloadLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface ZeroTrustGatewayPolicyRuleSettingsQuarantine {
  /**
  * Types of files to sandbox.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#file_types ZeroTrustGatewayPolicy#file_types}
  */
  readonly fileTypes?: string[];
}

export function zeroTrustGatewayPolicyRuleSettingsQuarantineToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsQuarantine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileTypes),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsQuarantineToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsQuarantine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsQuarantine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTypes = this._fileTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsQuarantine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileTypes = value.fileTypes;
    }
  }

  // file_types - computed: true, optional: true, required: false
  private _fileTypes?: string[]; 
  public get fileTypes() {
    return this.getListAttribute('file_types');
  }
  public set fileTypes(value: string[]) {
    this._fileTypes = value;
  }
  public resetFileTypes() {
    this._fileTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypesInput() {
    return this._fileTypes;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsRedirect {
  /**
  * If true, context information will be passed as query parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#include_context ZeroTrustGatewayPolicy#include_context}
  */
  readonly includeContext?: boolean | cdktf.IResolvable;
  /**
  * If true, the path and query parameters from the original request will be appended to target_uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#preserve_path_and_query ZeroTrustGatewayPolicy#preserve_path_and_query}
  */
  readonly preservePathAndQuery?: boolean | cdktf.IResolvable;
  /**
  * URI to which the user will be redirected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#target_uri ZeroTrustGatewayPolicy#target_uri}
  */
  readonly targetUri: string;
}

export function zeroTrustGatewayPolicyRuleSettingsRedirectToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_context: cdktf.booleanToTerraform(struct!.includeContext),
    preserve_path_and_query: cdktf.booleanToTerraform(struct!.preservePathAndQuery),
    target_uri: cdktf.stringToTerraform(struct!.targetUri),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsRedirectToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_context: {
      value: cdktf.booleanToHclTerraform(struct!.includeContext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_path_and_query: {
      value: cdktf.booleanToHclTerraform(struct!.preservePathAndQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_uri: {
      value: cdktf.stringToHclTerraform(struct!.targetUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeContext = this._includeContext;
    }
    if (this._preservePathAndQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.preservePathAndQuery = this._preservePathAndQuery;
    }
    if (this._targetUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUri = this._targetUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeContext = undefined;
      this._preservePathAndQuery = undefined;
      this._targetUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeContext = value.includeContext;
      this._preservePathAndQuery = value.preservePathAndQuery;
      this._targetUri = value.targetUri;
    }
  }

  // include_context - computed: true, optional: true, required: false
  private _includeContext?: boolean | cdktf.IResolvable; 
  public get includeContext() {
    return this.getBooleanAttribute('include_context');
  }
  public set includeContext(value: boolean | cdktf.IResolvable) {
    this._includeContext = value;
  }
  public resetIncludeContext() {
    this._includeContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeContextInput() {
    return this._includeContext;
  }

  // preserve_path_and_query - computed: true, optional: true, required: false
  private _preservePathAndQuery?: boolean | cdktf.IResolvable; 
  public get preservePathAndQuery() {
    return this.getBooleanAttribute('preserve_path_and_query');
  }
  public set preservePathAndQuery(value: boolean | cdktf.IResolvable) {
    this._preservePathAndQuery = value;
  }
  public resetPreservePathAndQuery() {
    this._preservePathAndQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preservePathAndQueryInput() {
    return this._preservePathAndQuery;
  }

  // target_uri - computed: true, optional: false, required: true
  private _targetUri?: string; 
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }
  public set targetUri(value: string) {
    this._targetUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUriInput() {
    return this._targetUri;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally {
  /**
  * The fallback behavior to apply when the internal DNS response code is different from 'NOERROR' or when the response data only contains CNAME records for 'A' or 'AAAA' queries.
  * Available values: "none", "public_dns".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#fallback ZeroTrustGatewayPolicy#fallback}
  */
  readonly fallback?: string;
  /**
  * The internal DNS view identifier that's passed to the internal DNS service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#view_id ZeroTrustGatewayPolicy#view_id}
  */
  readonly viewId?: string;
}

export function zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback: cdktf.stringToTerraform(struct!.fallback),
    view_id: cdktf.stringToTerraform(struct!.viewId),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback: {
      value: cdktf.stringToHclTerraform(struct!.fallback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_id: {
      value: cdktf.stringToHclTerraform(struct!.viewId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallback = this._fallback;
    }
    if (this._viewId !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewId = this._viewId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallback = undefined;
      this._viewId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallback = value.fallback;
      this._viewId = value.viewId;
    }
  }

  // fallback - computed: true, optional: true, required: false
  private _fallback?: string; 
  public get fallback() {
    return this.getStringAttribute('fallback');
  }
  public set fallback(value: string) {
    this._fallback = value;
  }
  public resetFallback() {
    this._fallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback;
  }

  // view_id - computed: true, optional: true, required: false
  private _viewId?: string; 
  public get viewId() {
    return this.getStringAttribute('view_id');
  }
  public set viewId(value: string) {
    this._viewId = value;
  }
  public resetViewId() {
    this._viewId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewIdInput() {
    return this._viewId;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsUntrustedCert {
  /**
  * The action performed when an untrusted certificate is seen. The default action is an error with HTTP code 526.
  * Available values: "pass_through", "block", "error".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#action ZeroTrustGatewayPolicy#action}
  */
  readonly action?: string;
}

export function zeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsUntrustedCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettings {
  /**
  * Add custom headers to allowed requests, in the form of key-value pairs. Keys are header names, pointing to an array with its header value(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#add_headers ZeroTrustGatewayPolicy#add_headers}
  */
  readonly addHeaders?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Set by parent MSP accounts to enable their children to bypass this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#allow_child_bypass ZeroTrustGatewayPolicy#allow_child_bypass}
  */
  readonly allowChildBypass?: boolean | cdktf.IResolvable;
  /**
  * Settings for the Audit SSH action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#audit_ssh ZeroTrustGatewayPolicy#audit_ssh}
  */
  readonly auditSsh?: ZeroTrustGatewayPolicyRuleSettingsAuditSsh;
  /**
  * Configure how browser isolation behaves.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#biso_admin_controls ZeroTrustGatewayPolicy#biso_admin_controls}
  */
  readonly bisoAdminControls?: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls;
  /**
  * Custom block page settings. If missing/null, blocking will use the the account settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#block_page ZeroTrustGatewayPolicy#block_page}
  */
  readonly blockPage?: ZeroTrustGatewayPolicyRuleSettingsBlockPage;
  /**
  * Enable the custom block page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#block_page_enabled ZeroTrustGatewayPolicy#block_page_enabled}
  */
  readonly blockPageEnabled?: boolean | cdktf.IResolvable;
  /**
  * The text describing why this block occurred, displayed on the custom block page (if enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#block_reason ZeroTrustGatewayPolicy#block_reason}
  */
  readonly blockReason?: string;
  /**
  * Set by children MSP accounts to bypass their parent's rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#bypass_parent_rule ZeroTrustGatewayPolicy#bypass_parent_rule}
  */
  readonly bypassParentRule?: boolean | cdktf.IResolvable;
  /**
  * Configure how session check behaves.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#check_session ZeroTrustGatewayPolicy#check_session}
  */
  readonly checkSession?: ZeroTrustGatewayPolicyRuleSettingsCheckSession;
  /**
  * Add your own custom resolvers to route queries that match the resolver policy. Cannot be used when 'resolve_dns_through_cloudflare' or 'resolve_dns_internally' are set. DNS queries will route to the address closest to their origin. Only valid when a rule's action is set to 'resolve'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#dns_resolvers ZeroTrustGatewayPolicy#dns_resolvers}
  */
  readonly dnsResolvers?: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers;
  /**
  * Configure how Gateway Proxy traffic egresses. You can enable this setting for rules with Egress actions and filters, or omit it to indicate local egress via WARP IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#egress ZeroTrustGatewayPolicy#egress}
  */
  readonly egress?: ZeroTrustGatewayPolicyRuleSettingsEgress;
  /**
  * Set to true, to ignore the category matches at CNAME domains in a response. If unchecked, the categories in this rule will be checked against all the CNAME domain categories in a response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#ignore_cname_category_matches ZeroTrustGatewayPolicy#ignore_cname_category_matches}
  */
  readonly ignoreCnameCategoryMatches?: boolean | cdktf.IResolvable;
  /**
  * INSECURE - disable DNSSEC validation (for Allow actions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#insecure_disable_dnssec_validation ZeroTrustGatewayPolicy#insecure_disable_dnssec_validation}
  */
  readonly insecureDisableDnssecValidation?: boolean | cdktf.IResolvable;
  /**
  * Set to true to enable IPs in DNS resolver category blocks. By default categories only block based on domain names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#ip_categories ZeroTrustGatewayPolicy#ip_categories}
  */
  readonly ipCategories?: boolean | cdktf.IResolvable;
  /**
  * Set to true to include IPs in DNS resolver indicator feed blocks. By default indicator feeds only block based on domain names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#ip_indicator_feeds ZeroTrustGatewayPolicy#ip_indicator_feeds}
  */
  readonly ipIndicatorFeeds?: boolean | cdktf.IResolvable;
  /**
  * Send matching traffic to the supplied destination IP address and port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#l4override ZeroTrustGatewayPolicy#l4override}
  */
  readonly l4Override?: ZeroTrustGatewayPolicyRuleSettingsL4Override;
  /**
  * Configure a notification to display on the user's device when this rule is matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#notification_settings ZeroTrustGatewayPolicy#notification_settings}
  */
  readonly notificationSettings?: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings;
  /**
  * Override matching DNS queries with a hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#override_host ZeroTrustGatewayPolicy#override_host}
  */
  readonly overrideHost?: string;
  /**
  * Override matching DNS queries with an IP or set of IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#override_ips ZeroTrustGatewayPolicy#override_ips}
  */
  readonly overrideIps?: string[];
  /**
  * Configure DLP payload logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#payload_log ZeroTrustGatewayPolicy#payload_log}
  */
  readonly payloadLog?: ZeroTrustGatewayPolicyRuleSettingsPayloadLog;
  /**
  * Settings that apply to quarantine rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#quarantine ZeroTrustGatewayPolicy#quarantine}
  */
  readonly quarantine?: ZeroTrustGatewayPolicyRuleSettingsQuarantine;
  /**
  * Settings that apply to redirect rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#redirect ZeroTrustGatewayPolicy#redirect}
  */
  readonly redirect?: ZeroTrustGatewayPolicyRuleSettingsRedirect;
  /**
  * Configure to forward the query to the internal DNS service, passing the specified 'view_id' as input. Cannot be set when 'dns_resolvers' are specified or 'resolve_dns_through_cloudflare' is set. Only valid when a rule's action is set to 'resolve'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#resolve_dns_internally ZeroTrustGatewayPolicy#resolve_dns_internally}
  */
  readonly resolveDnsInternally?: ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally;
  /**
  * Enable to send queries that match the policy to Cloudflare's default 1.1.1.1 DNS resolver. Cannot be set when 'dns_resolvers' are specified or 'resolve_dns_internally' is set. Only valid when a rule's action is set to 'resolve'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#resolve_dns_through_cloudflare ZeroTrustGatewayPolicy#resolve_dns_through_cloudflare}
  */
  readonly resolveDnsThroughCloudflare?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when an upstream cert is invalid or an SSL error occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#untrusted_cert ZeroTrustGatewayPolicy#untrusted_cert}
  */
  readonly untrustedCert?: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert;
}

export function zeroTrustGatewayPolicyRuleSettingsToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_headers: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.addHeaders),
    allow_child_bypass: cdktf.booleanToTerraform(struct!.allowChildBypass),
    audit_ssh: zeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform(struct!.auditSsh),
    biso_admin_controls: zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform(struct!.bisoAdminControls),
    block_page: zeroTrustGatewayPolicyRuleSettingsBlockPageToTerraform(struct!.blockPage),
    block_page_enabled: cdktf.booleanToTerraform(struct!.blockPageEnabled),
    block_reason: cdktf.stringToTerraform(struct!.blockReason),
    bypass_parent_rule: cdktf.booleanToTerraform(struct!.bypassParentRule),
    check_session: zeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform(struct!.checkSession),
    dns_resolvers: zeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform(struct!.dnsResolvers),
    egress: zeroTrustGatewayPolicyRuleSettingsEgressToTerraform(struct!.egress),
    ignore_cname_category_matches: cdktf.booleanToTerraform(struct!.ignoreCnameCategoryMatches),
    insecure_disable_dnssec_validation: cdktf.booleanToTerraform(struct!.insecureDisableDnssecValidation),
    ip_categories: cdktf.booleanToTerraform(struct!.ipCategories),
    ip_indicator_feeds: cdktf.booleanToTerraform(struct!.ipIndicatorFeeds),
    l4override: zeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform(struct!.l4Override),
    notification_settings: zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform(struct!.notificationSettings),
    override_host: cdktf.stringToTerraform(struct!.overrideHost),
    override_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.overrideIps),
    payload_log: zeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform(struct!.payloadLog),
    quarantine: zeroTrustGatewayPolicyRuleSettingsQuarantineToTerraform(struct!.quarantine),
    redirect: zeroTrustGatewayPolicyRuleSettingsRedirectToTerraform(struct!.redirect),
    resolve_dns_internally: zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToTerraform(struct!.resolveDnsInternally),
    resolve_dns_through_cloudflare: cdktf.booleanToTerraform(struct!.resolveDnsThroughCloudflare),
    untrusted_cert: zeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform(struct!.untrustedCert),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_headers: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.addHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    allow_child_bypass: {
      value: cdktf.booleanToHclTerraform(struct!.allowChildBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit_ssh: {
      value: zeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform(struct!.auditSsh),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsAuditSsh",
    },
    biso_admin_controls: {
      value: zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform(struct!.bisoAdminControls),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls",
    },
    block_page: {
      value: zeroTrustGatewayPolicyRuleSettingsBlockPageToHclTerraform(struct!.blockPage),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsBlockPage",
    },
    block_page_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.blockPageEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_reason: {
      value: cdktf.stringToHclTerraform(struct!.blockReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_parent_rule: {
      value: cdktf.booleanToHclTerraform(struct!.bypassParentRule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_session: {
      value: zeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform(struct!.checkSession),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsCheckSession",
    },
    dns_resolvers: {
      value: zeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform(struct!.dnsResolvers),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsDnsResolvers",
    },
    egress: {
      value: zeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform(struct!.egress),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsEgress",
    },
    ignore_cname_category_matches: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCnameCategoryMatches),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_disable_dnssec_validation: {
      value: cdktf.booleanToHclTerraform(struct!.insecureDisableDnssecValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_categories: {
      value: cdktf.booleanToHclTerraform(struct!.ipCategories),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_indicator_feeds: {
      value: cdktf.booleanToHclTerraform(struct!.ipIndicatorFeeds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    l4override: {
      value: zeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform(struct!.l4Override),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsL4Override",
    },
    notification_settings: {
      value: zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform(struct!.notificationSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsNotificationSettings",
    },
    override_host: {
      value: cdktf.stringToHclTerraform(struct!.overrideHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.overrideIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    payload_log: {
      value: zeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform(struct!.payloadLog),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsPayloadLog",
    },
    quarantine: {
      value: zeroTrustGatewayPolicyRuleSettingsQuarantineToHclTerraform(struct!.quarantine),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsQuarantine",
    },
    redirect: {
      value: zeroTrustGatewayPolicyRuleSettingsRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsRedirect",
    },
    resolve_dns_internally: {
      value: zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToHclTerraform(struct!.resolveDnsInternally),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally",
    },
    resolve_dns_through_cloudflare: {
      value: cdktf.booleanToHclTerraform(struct!.resolveDnsThroughCloudflare),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    untrusted_cert: {
      value: zeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform(struct!.untrustedCert),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsUntrustedCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHeaders = this._addHeaders;
    }
    if (this._allowChildBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowChildBypass = this._allowChildBypass;
    }
    if (this._auditSsh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditSsh = this._auditSsh?.internalValue;
    }
    if (this._bisoAdminControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bisoAdminControls = this._bisoAdminControls?.internalValue;
    }
    if (this._blockPage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPage = this._blockPage?.internalValue;
    }
    if (this._blockPageEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPageEnabled = this._blockPageEnabled;
    }
    if (this._blockReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockReason = this._blockReason;
    }
    if (this._bypassParentRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassParentRule = this._bypassParentRule;
    }
    if (this._checkSession?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkSession = this._checkSession?.internalValue;
    }
    if (this._dnsResolvers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsResolvers = this._dnsResolvers?.internalValue;
    }
    if (this._egress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress?.internalValue;
    }
    if (this._ignoreCnameCategoryMatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCnameCategoryMatches = this._ignoreCnameCategoryMatches;
    }
    if (this._insecureDisableDnssecValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureDisableDnssecValidation = this._insecureDisableDnssecValidation;
    }
    if (this._ipCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCategories = this._ipCategories;
    }
    if (this._ipIndicatorFeeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipIndicatorFeeds = this._ipIndicatorFeeds;
    }
    if (this._l4Override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Override = this._l4Override?.internalValue;
    }
    if (this._notificationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationSettings = this._notificationSettings?.internalValue;
    }
    if (this._overrideHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideHost = this._overrideHost;
    }
    if (this._overrideIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideIps = this._overrideIps;
    }
    if (this._payloadLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadLog = this._payloadLog?.internalValue;
    }
    if (this._quarantine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    if (this._resolveDnsInternally?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveDnsInternally = this._resolveDnsInternally?.internalValue;
    }
    if (this._resolveDnsThroughCloudflare !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveDnsThroughCloudflare = this._resolveDnsThroughCloudflare;
    }
    if (this._untrustedCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.untrustedCert = this._untrustedCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addHeaders = undefined;
      this._allowChildBypass = undefined;
      this._auditSsh.internalValue = undefined;
      this._bisoAdminControls.internalValue = undefined;
      this._blockPage.internalValue = undefined;
      this._blockPageEnabled = undefined;
      this._blockReason = undefined;
      this._bypassParentRule = undefined;
      this._checkSession.internalValue = undefined;
      this._dnsResolvers.internalValue = undefined;
      this._egress.internalValue = undefined;
      this._ignoreCnameCategoryMatches = undefined;
      this._insecureDisableDnssecValidation = undefined;
      this._ipCategories = undefined;
      this._ipIndicatorFeeds = undefined;
      this._l4Override.internalValue = undefined;
      this._notificationSettings.internalValue = undefined;
      this._overrideHost = undefined;
      this._overrideIps = undefined;
      this._payloadLog.internalValue = undefined;
      this._quarantine.internalValue = undefined;
      this._redirect.internalValue = undefined;
      this._resolveDnsInternally.internalValue = undefined;
      this._resolveDnsThroughCloudflare = undefined;
      this._untrustedCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addHeaders = value.addHeaders;
      this._allowChildBypass = value.allowChildBypass;
      this._auditSsh.internalValue = value.auditSsh;
      this._bisoAdminControls.internalValue = value.bisoAdminControls;
      this._blockPage.internalValue = value.blockPage;
      this._blockPageEnabled = value.blockPageEnabled;
      this._blockReason = value.blockReason;
      this._bypassParentRule = value.bypassParentRule;
      this._checkSession.internalValue = value.checkSession;
      this._dnsResolvers.internalValue = value.dnsResolvers;
      this._egress.internalValue = value.egress;
      this._ignoreCnameCategoryMatches = value.ignoreCnameCategoryMatches;
      this._insecureDisableDnssecValidation = value.insecureDisableDnssecValidation;
      this._ipCategories = value.ipCategories;
      this._ipIndicatorFeeds = value.ipIndicatorFeeds;
      this._l4Override.internalValue = value.l4Override;
      this._notificationSettings.internalValue = value.notificationSettings;
      this._overrideHost = value.overrideHost;
      this._overrideIps = value.overrideIps;
      this._payloadLog.internalValue = value.payloadLog;
      this._quarantine.internalValue = value.quarantine;
      this._redirect.internalValue = value.redirect;
      this._resolveDnsInternally.internalValue = value.resolveDnsInternally;
      this._resolveDnsThroughCloudflare = value.resolveDnsThroughCloudflare;
      this._untrustedCert.internalValue = value.untrustedCert;
    }
  }

  // add_headers - computed: true, optional: true, required: false
  private _addHeaders?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get addHeaders() {
    return this.interpolationForAttribute('add_headers');
  }
  public set addHeaders(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._addHeaders = value;
  }
  public resetAddHeaders() {
    this._addHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeadersInput() {
    return this._addHeaders;
  }

  // allow_child_bypass - computed: true, optional: true, required: false
  private _allowChildBypass?: boolean | cdktf.IResolvable; 
  public get allowChildBypass() {
    return this.getBooleanAttribute('allow_child_bypass');
  }
  public set allowChildBypass(value: boolean | cdktf.IResolvable) {
    this._allowChildBypass = value;
  }
  public resetAllowChildBypass() {
    this._allowChildBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowChildBypassInput() {
    return this._allowChildBypass;
  }

  // audit_ssh - computed: true, optional: true, required: false
  private _auditSsh = new ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference(this, "audit_ssh");
  public get auditSsh() {
    return this._auditSsh;
  }
  public putAuditSsh(value: ZeroTrustGatewayPolicyRuleSettingsAuditSsh) {
    this._auditSsh.internalValue = value;
  }
  public resetAuditSsh() {
    this._auditSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditSshInput() {
    return this._auditSsh.internalValue;
  }

  // biso_admin_controls - computed: true, optional: true, required: false
  private _bisoAdminControls = new ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference(this, "biso_admin_controls");
  public get bisoAdminControls() {
    return this._bisoAdminControls;
  }
  public putBisoAdminControls(value: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls) {
    this._bisoAdminControls.internalValue = value;
  }
  public resetBisoAdminControls() {
    this._bisoAdminControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bisoAdminControlsInput() {
    return this._bisoAdminControls.internalValue;
  }

  // block_page - computed: true, optional: true, required: false
  private _blockPage = new ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference(this, "block_page");
  public get blockPage() {
    return this._blockPage;
  }
  public putBlockPage(value: ZeroTrustGatewayPolicyRuleSettingsBlockPage) {
    this._blockPage.internalValue = value;
  }
  public resetBlockPage() {
    this._blockPage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPageInput() {
    return this._blockPage.internalValue;
  }

  // block_page_enabled - computed: true, optional: true, required: false
  private _blockPageEnabled?: boolean | cdktf.IResolvable; 
  public get blockPageEnabled() {
    return this.getBooleanAttribute('block_page_enabled');
  }
  public set blockPageEnabled(value: boolean | cdktf.IResolvable) {
    this._blockPageEnabled = value;
  }
  public resetBlockPageEnabled() {
    this._blockPageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPageEnabledInput() {
    return this._blockPageEnabled;
  }

  // block_reason - computed: true, optional: true, required: false
  private _blockReason?: string; 
  public get blockReason() {
    return this.getStringAttribute('block_reason');
  }
  public set blockReason(value: string) {
    this._blockReason = value;
  }
  public resetBlockReason() {
    this._blockReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockReasonInput() {
    return this._blockReason;
  }

  // bypass_parent_rule - computed: true, optional: true, required: false
  private _bypassParentRule?: boolean | cdktf.IResolvable; 
  public get bypassParentRule() {
    return this.getBooleanAttribute('bypass_parent_rule');
  }
  public set bypassParentRule(value: boolean | cdktf.IResolvable) {
    this._bypassParentRule = value;
  }
  public resetBypassParentRule() {
    this._bypassParentRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassParentRuleInput() {
    return this._bypassParentRule;
  }

  // check_session - computed: true, optional: true, required: false
  private _checkSession = new ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference(this, "check_session");
  public get checkSession() {
    return this._checkSession;
  }
  public putCheckSession(value: ZeroTrustGatewayPolicyRuleSettingsCheckSession) {
    this._checkSession.internalValue = value;
  }
  public resetCheckSession() {
    this._checkSession.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkSessionInput() {
    return this._checkSession.internalValue;
  }

  // dns_resolvers - computed: true, optional: true, required: false
  private _dnsResolvers = new ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference(this, "dns_resolvers");
  public get dnsResolvers() {
    return this._dnsResolvers;
  }
  public putDnsResolvers(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers) {
    this._dnsResolvers.internalValue = value;
  }
  public resetDnsResolvers() {
    this._dnsResolvers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolversInput() {
    return this._dnsResolvers.internalValue;
  }

  // egress - computed: true, optional: true, required: false
  private _egress = new ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference(this, "egress");
  public get egress() {
    return this._egress;
  }
  public putEgress(value: ZeroTrustGatewayPolicyRuleSettingsEgress) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // ignore_cname_category_matches - computed: true, optional: true, required: false
  private _ignoreCnameCategoryMatches?: boolean | cdktf.IResolvable; 
  public get ignoreCnameCategoryMatches() {
    return this.getBooleanAttribute('ignore_cname_category_matches');
  }
  public set ignoreCnameCategoryMatches(value: boolean | cdktf.IResolvable) {
    this._ignoreCnameCategoryMatches = value;
  }
  public resetIgnoreCnameCategoryMatches() {
    this._ignoreCnameCategoryMatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCnameCategoryMatchesInput() {
    return this._ignoreCnameCategoryMatches;
  }

  // insecure_disable_dnssec_validation - computed: true, optional: true, required: false
  private _insecureDisableDnssecValidation?: boolean | cdktf.IResolvable; 
  public get insecureDisableDnssecValidation() {
    return this.getBooleanAttribute('insecure_disable_dnssec_validation');
  }
  public set insecureDisableDnssecValidation(value: boolean | cdktf.IResolvable) {
    this._insecureDisableDnssecValidation = value;
  }
  public resetInsecureDisableDnssecValidation() {
    this._insecureDisableDnssecValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureDisableDnssecValidationInput() {
    return this._insecureDisableDnssecValidation;
  }

  // ip_categories - computed: true, optional: true, required: false
  private _ipCategories?: boolean | cdktf.IResolvable; 
  public get ipCategories() {
    return this.getBooleanAttribute('ip_categories');
  }
  public set ipCategories(value: boolean | cdktf.IResolvable) {
    this._ipCategories = value;
  }
  public resetIpCategories() {
    this._ipCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCategoriesInput() {
    return this._ipCategories;
  }

  // ip_indicator_feeds - computed: true, optional: true, required: false
  private _ipIndicatorFeeds?: boolean | cdktf.IResolvable; 
  public get ipIndicatorFeeds() {
    return this.getBooleanAttribute('ip_indicator_feeds');
  }
  public set ipIndicatorFeeds(value: boolean | cdktf.IResolvable) {
    this._ipIndicatorFeeds = value;
  }
  public resetIpIndicatorFeeds() {
    this._ipIndicatorFeeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipIndicatorFeedsInput() {
    return this._ipIndicatorFeeds;
  }

  // l4override - computed: true, optional: true, required: false
  private _l4Override = new ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference(this, "l4override");
  public get l4Override() {
    return this._l4Override;
  }
  public putL4Override(value: ZeroTrustGatewayPolicyRuleSettingsL4Override) {
    this._l4Override.internalValue = value;
  }
  public resetL4Override() {
    this._l4Override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4OverrideInput() {
    return this._l4Override.internalValue;
  }

  // notification_settings - computed: true, optional: true, required: false
  private _notificationSettings = new ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  public resetNotificationSettings() {
    this._notificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // override_host - computed: true, optional: true, required: false
  private _overrideHost?: string; 
  public get overrideHost() {
    return this.getStringAttribute('override_host');
  }
  public set overrideHost(value: string) {
    this._overrideHost = value;
  }
  public resetOverrideHost() {
    this._overrideHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideHostInput() {
    return this._overrideHost;
  }

  // override_ips - computed: true, optional: true, required: false
  private _overrideIps?: string[]; 
  public get overrideIps() {
    return this.getListAttribute('override_ips');
  }
  public set overrideIps(value: string[]) {
    this._overrideIps = value;
  }
  public resetOverrideIps() {
    this._overrideIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideIpsInput() {
    return this._overrideIps;
  }

  // payload_log - computed: true, optional: true, required: false
  private _payloadLog = new ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference(this, "payload_log");
  public get payloadLog() {
    return this._payloadLog;
  }
  public putPayloadLog(value: ZeroTrustGatewayPolicyRuleSettingsPayloadLog) {
    this._payloadLog.internalValue = value;
  }
  public resetPayloadLog() {
    this._payloadLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadLogInput() {
    return this._payloadLog.internalValue;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine = new ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference(this, "quarantine");
  public get quarantine() {
    return this._quarantine;
  }
  public putQuarantine(value: ZeroTrustGatewayPolicyRuleSettingsQuarantine) {
    this._quarantine.internalValue = value;
  }
  public resetQuarantine() {
    this._quarantine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine.internalValue;
  }

  // redirect - computed: true, optional: true, required: false
  private _redirect = new ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ZeroTrustGatewayPolicyRuleSettingsRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // resolve_dns_internally - computed: true, optional: true, required: false
  private _resolveDnsInternally = new ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference(this, "resolve_dns_internally");
  public get resolveDnsInternally() {
    return this._resolveDnsInternally;
  }
  public putResolveDnsInternally(value: ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally) {
    this._resolveDnsInternally.internalValue = value;
  }
  public resetResolveDnsInternally() {
    this._resolveDnsInternally.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveDnsInternallyInput() {
    return this._resolveDnsInternally.internalValue;
  }

  // resolve_dns_through_cloudflare - computed: true, optional: true, required: false
  private _resolveDnsThroughCloudflare?: boolean | cdktf.IResolvable; 
  public get resolveDnsThroughCloudflare() {
    return this.getBooleanAttribute('resolve_dns_through_cloudflare');
  }
  public set resolveDnsThroughCloudflare(value: boolean | cdktf.IResolvable) {
    this._resolveDnsThroughCloudflare = value;
  }
  public resetResolveDnsThroughCloudflare() {
    this._resolveDnsThroughCloudflare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveDnsThroughCloudflareInput() {
    return this._resolveDnsThroughCloudflare;
  }

  // untrusted_cert - computed: true, optional: true, required: false
  private _untrustedCert = new ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference(this, "untrusted_cert");
  public get untrustedCert() {
    return this._untrustedCert;
  }
  public putUntrustedCert(value: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert) {
    this._untrustedCert.internalValue = value;
  }
  public resetUntrustedCert() {
    this._untrustedCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedCertInput() {
    return this._untrustedCert.internalValue;
  }
}
export interface ZeroTrustGatewayPolicySchedule {
  /**
  * The time intervals when the rule will be active on Fridays, in increasing order from 00:00-24:00.  If this parameter is omitted, the rule will be deactivated on Fridays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#fri ZeroTrustGatewayPolicy#fri}
  */
  readonly fri?: string;
  /**
  * The time intervals when the rule will be active on Mondays, in increasing order from 00:00-24:00. If this parameter is omitted, the rule will be deactivated on Mondays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#mon ZeroTrustGatewayPolicy#mon}
  */
  readonly mon?: string;
  /**
  * The time intervals when the rule will be active on Saturdays, in increasing order from 00:00-24:00.  If this parameter is omitted, the rule will be deactivated on Saturdays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#sat ZeroTrustGatewayPolicy#sat}
  */
  readonly sat?: string;
  /**
  * The time intervals when the rule will be active on Sundays, in increasing order from 00:00-24:00. If this parameter is omitted, the rule will be deactivated on Sundays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#sun ZeroTrustGatewayPolicy#sun}
  */
  readonly sun?: string;
  /**
  * The time intervals when the rule will be active on Thursdays, in increasing order from 00:00-24:00. If this parameter is omitted, the rule will be deactivated on Thursdays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#thu ZeroTrustGatewayPolicy#thu}
  */
  readonly thu?: string;
  /**
  * The time zone the rule will be evaluated against. If a [valid time zone city name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) is provided, Gateway will always use the current time at that time zone. If this parameter is omitted, then Gateway will use the time zone inferred from the user's source IP to evaluate the rule. If Gateway cannot determine the time zone from the IP, we will fall back to the time zone of the user's connected data center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#time_zone ZeroTrustGatewayPolicy#time_zone}
  */
  readonly timeZone?: string;
  /**
  * The time intervals when the rule will be active on Tuesdays, in increasing order from 00:00-24:00. If this parameter is omitted, the rule will be deactivated on Tuesdays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#tue ZeroTrustGatewayPolicy#tue}
  */
  readonly tue?: string;
  /**
  * The time intervals when the rule will be active on Wednesdays, in increasing order from 00:00-24:00. If this parameter is omitted, the rule will be deactivated on Wednesdays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#wed ZeroTrustGatewayPolicy#wed}
  */
  readonly wed?: string;
}

export function zeroTrustGatewayPolicyScheduleToTerraform(struct?: ZeroTrustGatewayPolicySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fri: cdktf.stringToTerraform(struct!.fri),
    mon: cdktf.stringToTerraform(struct!.mon),
    sat: cdktf.stringToTerraform(struct!.sat),
    sun: cdktf.stringToTerraform(struct!.sun),
    thu: cdktf.stringToTerraform(struct!.thu),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    tue: cdktf.stringToTerraform(struct!.tue),
    wed: cdktf.stringToTerraform(struct!.wed),
  }
}


export function zeroTrustGatewayPolicyScheduleToHclTerraform(struct?: ZeroTrustGatewayPolicySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fri: {
      value: cdktf.stringToHclTerraform(struct!.fri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mon: {
      value: cdktf.stringToHclTerraform(struct!.mon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sat: {
      value: cdktf.stringToHclTerraform(struct!.sat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sun: {
      value: cdktf.stringToHclTerraform(struct!.sun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thu: {
      value: cdktf.stringToHclTerraform(struct!.thu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tue: {
      value: cdktf.stringToHclTerraform(struct!.tue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wed: {
      value: cdktf.stringToHclTerraform(struct!.wed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayPolicySchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fri !== undefined) {
      hasAnyValues = true;
      internalValueResult.fri = this._fri;
    }
    if (this._mon !== undefined) {
      hasAnyValues = true;
      internalValueResult.mon = this._mon;
    }
    if (this._sat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sat = this._sat;
    }
    if (this._sun !== undefined) {
      hasAnyValues = true;
      internalValueResult.sun = this._sun;
    }
    if (this._thu !== undefined) {
      hasAnyValues = true;
      internalValueResult.thu = this._thu;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._tue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tue = this._tue;
    }
    if (this._wed !== undefined) {
      hasAnyValues = true;
      internalValueResult.wed = this._wed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicySchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fri = undefined;
      this._mon = undefined;
      this._sat = undefined;
      this._sun = undefined;
      this._thu = undefined;
      this._timeZone = undefined;
      this._tue = undefined;
      this._wed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fri = value.fri;
      this._mon = value.mon;
      this._sat = value.sat;
      this._sun = value.sun;
      this._thu = value.thu;
      this._timeZone = value.timeZone;
      this._tue = value.tue;
      this._wed = value.wed;
    }
  }

  // fri - computed: true, optional: true, required: false
  private _fri?: string; 
  public get fri() {
    return this.getStringAttribute('fri');
  }
  public set fri(value: string) {
    this._fri = value;
  }
  public resetFri() {
    this._fri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friInput() {
    return this._fri;
  }

  // mon - computed: true, optional: true, required: false
  private _mon?: string; 
  public get mon() {
    return this.getStringAttribute('mon');
  }
  public set mon(value: string) {
    this._mon = value;
  }
  public resetMon() {
    this._mon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monInput() {
    return this._mon;
  }

  // sat - computed: true, optional: true, required: false
  private _sat?: string; 
  public get sat() {
    return this.getStringAttribute('sat');
  }
  public set sat(value: string) {
    this._sat = value;
  }
  public resetSat() {
    this._sat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get satInput() {
    return this._sat;
  }

  // sun - computed: true, optional: true, required: false
  private _sun?: string; 
  public get sun() {
    return this.getStringAttribute('sun');
  }
  public set sun(value: string) {
    this._sun = value;
  }
  public resetSun() {
    this._sun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sunInput() {
    return this._sun;
  }

  // thu - computed: true, optional: true, required: false
  private _thu?: string; 
  public get thu() {
    return this.getStringAttribute('thu');
  }
  public set thu(value: string) {
    this._thu = value;
  }
  public resetThu() {
    this._thu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thuInput() {
    return this._thu;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // tue - computed: true, optional: true, required: false
  private _tue?: string; 
  public get tue() {
    return this.getStringAttribute('tue');
  }
  public set tue(value: string) {
    this._tue = value;
  }
  public resetTue() {
    this._tue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tueInput() {
    return this._tue;
  }

  // wed - computed: true, optional: true, required: false
  private _wed?: string; 
  public get wed() {
    return this.getStringAttribute('wed');
  }
  public set wed(value: string) {
    this._wed = value;
  }
  public resetWed() {
    this._wed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wedInput() {
    return this._wed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy}
*/
export class ZeroTrustGatewayPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_gateway_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustGatewayPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustGatewayPolicy to import
  * @param importFromId The id of the existing ZeroTrustGatewayPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustGatewayPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustGatewayPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustGatewayPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_gateway_policy',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.8.4',
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
    this._action = config.action;
    this._description = config.description;
    this._devicePosture = config.devicePosture;
    this._enabled = config.enabled;
    this._expiration.internalValue = config.expiration;
    this._filters = config.filters;
    this._identity = config.identity;
    this._name = config.name;
    this._precedence = config.precedence;
    this._ruleSettings.internalValue = config.ruleSettings;
    this._schedule.internalValue = config.schedule;
    this._traffic = config.traffic;
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

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
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

  // device_posture - computed: true, optional: true, required: false
  private _devicePosture?: string; 
  public get devicePosture() {
    return this.getStringAttribute('device_posture');
  }
  public set devicePosture(value: string) {
    this._devicePosture = value;
  }
  public resetDevicePosture() {
    this._devicePosture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePostureInput() {
    return this._devicePosture;
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

  // expiration - computed: true, optional: true, required: false
  private _expiration = new ZeroTrustGatewayPolicyExpirationOutputReference(this, "expiration");
  public get expiration() {
    return this._expiration;
  }
  public putExpiration(value: ZeroTrustGatewayPolicyExpiration) {
    this._expiration.internalValue = value;
  }
  public resetExpiration() {
    this._expiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return this.getListAttribute('filters');
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
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

  // not_sharable - computed: true, optional: false, required: false
  public get notSharable() {
    return this.getBooleanAttribute('not_sharable');
  }

  // precedence - computed: true, optional: true, required: false
  private _precedence?: number; 
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // rule_settings - computed: true, optional: true, required: false
  private _ruleSettings = new ZeroTrustGatewayPolicyRuleSettingsOutputReference(this, "rule_settings");
  public get ruleSettings() {
    return this._ruleSettings;
  }
  public putRuleSettings(value: ZeroTrustGatewayPolicyRuleSettings) {
    this._ruleSettings.internalValue = value;
  }
  public resetRuleSettings() {
    this._ruleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSettingsInput() {
    return this._ruleSettings.internalValue;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule = new ZeroTrustGatewayPolicyScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: ZeroTrustGatewayPolicySchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // source_account - computed: true, optional: false, required: false
  public get sourceAccount() {
    return this.getStringAttribute('source_account');
  }

  // traffic - computed: true, optional: true, required: false
  private _traffic?: string; 
  public get traffic() {
    return this.getStringAttribute('traffic');
  }
  public set traffic(value: string) {
    this._traffic = value;
  }
  public resetTraffic() {
    this._traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // warning_status - computed: true, optional: false, required: false
  public get warningStatus() {
    return this.getStringAttribute('warning_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      device_posture: cdktf.stringToTerraform(this._devicePosture),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expiration: zeroTrustGatewayPolicyExpirationToTerraform(this._expiration.internalValue),
      filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filters),
      identity: cdktf.stringToTerraform(this._identity),
      name: cdktf.stringToTerraform(this._name),
      precedence: cdktf.numberToTerraform(this._precedence),
      rule_settings: zeroTrustGatewayPolicyRuleSettingsToTerraform(this._ruleSettings.internalValue),
      schedule: zeroTrustGatewayPolicyScheduleToTerraform(this._schedule.internalValue),
      traffic: cdktf.stringToTerraform(this._traffic),
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
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      device_posture: {
        value: cdktf.stringToHclTerraform(this._devicePosture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expiration: {
        value: zeroTrustGatewayPolicyExpirationToHclTerraform(this._expiration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustGatewayPolicyExpiration",
      },
      filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      identity: {
        value: cdktf.stringToHclTerraform(this._identity),
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
      precedence: {
        value: cdktf.numberToHclTerraform(this._precedence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_settings: {
        value: zeroTrustGatewayPolicyRuleSettingsToHclTerraform(this._ruleSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustGatewayPolicyRuleSettings",
      },
      schedule: {
        value: zeroTrustGatewayPolicyScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustGatewayPolicySchedule",
      },
      traffic: {
        value: cdktf.stringToHclTerraform(this._traffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
