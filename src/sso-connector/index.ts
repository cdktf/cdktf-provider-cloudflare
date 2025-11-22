/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#account_id SsoConnector#account_id}
  */
  readonly accountId: string;
  /**
  * Begin the verification process after creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#begin_verification SsoConnector#begin_verification}
  */
  readonly beginVerification?: boolean | cdktf.IResolvable;
  /**
  * Email domain of the new SSO connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#email_domain SsoConnector#email_domain}
  */
  readonly emailDomain: string;
  /**
  * SSO Connector enabled state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#enabled SsoConnector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Controls the display of FedRAMP language to the user during SSO login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#use_fedramp_language SsoConnector#use_fedramp_language}
  */
  readonly useFedrampLanguage?: boolean | cdktf.IResolvable;
}
export interface SsoConnectorVerification {
}

export function ssoConnectorVerificationToTerraform(struct?: SsoConnectorVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ssoConnectorVerificationToHclTerraform(struct?: SsoConnectorVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SsoConnectorVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsoConnectorVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoConnectorVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector cloudflare_sso_connector}
*/
export class SsoConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_sso_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsoConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsoConnector to import
  * @param importFromId The id of the existing SsoConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsoConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_sso_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector cloudflare_sso_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: SsoConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_sso_connector',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.13.0',
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
    this._beginVerification = config.beginVerification;
    this._emailDomain = config.emailDomain;
    this._enabled = config.enabled;
    this._useFedrampLanguage = config.useFedrampLanguage;
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

  // begin_verification - computed: true, optional: true, required: false
  private _beginVerification?: boolean | cdktf.IResolvable; 
  public get beginVerification() {
    return this.getBooleanAttribute('begin_verification');
  }
  public set beginVerification(value: boolean | cdktf.IResolvable) {
    this._beginVerification = value;
  }
  public resetBeginVerification() {
    this._beginVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginVerificationInput() {
    return this._beginVerification;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // email_domain - computed: false, optional: false, required: true
  private _emailDomain?: string; 
  public get emailDomain() {
    return this.getStringAttribute('email_domain');
  }
  public set emailDomain(value: string) {
    this._emailDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDomainInput() {
    return this._emailDomain;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getStringAttribute('updated_on');
  }

  // use_fedramp_language - computed: true, optional: true, required: false
  private _useFedrampLanguage?: boolean | cdktf.IResolvable; 
  public get useFedrampLanguage() {
    return this.getBooleanAttribute('use_fedramp_language');
  }
  public set useFedrampLanguage(value: boolean | cdktf.IResolvable) {
    this._useFedrampLanguage = value;
  }
  public resetUseFedrampLanguage() {
    this._useFedrampLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFedrampLanguageInput() {
    return this._useFedrampLanguage;
  }

  // verification - computed: true, optional: false, required: false
  private _verification = new SsoConnectorVerificationOutputReference(this, "verification");
  public get verification() {
    return this._verification;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      begin_verification: cdktf.booleanToTerraform(this._beginVerification),
      email_domain: cdktf.stringToTerraform(this._emailDomain),
      enabled: cdktf.booleanToTerraform(this._enabled),
      use_fedramp_language: cdktf.booleanToTerraform(this._useFedrampLanguage),
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
      begin_verification: {
        value: cdktf.booleanToHclTerraform(this._beginVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email_domain: {
        value: cdktf.stringToHclTerraform(this._emailDomain),
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
      use_fedramp_language: {
        value: cdktf.booleanToHclTerraform(this._useFedrampLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
