/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_custom_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface R2CustomDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_custom_domain#account_id R2CustomDomain#account_id}
  */
  readonly accountId: string;
  /**
  * Name of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_custom_domain#bucket_name R2CustomDomain#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Name of the custom domain to be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_custom_domain#domain R2CustomDomain#domain}
  */
  readonly domain: string;
  /**
  * Whether to enable public bucket access at the custom domain. If undefined, the domain will be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_custom_domain#enabled R2CustomDomain#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Jurisdiction of the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_custom_domain#jurisdiction R2CustomDomain#jurisdiction}
  */
  readonly jurisdiction?: string;
  /**
  * Minimum TLS Version the custom domain will accept for incoming connections. If not set, defaults to 1.0.
  * Available values: "1.0", "1.1", "1.2", "1.3".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_custom_domain#min_tls R2CustomDomain#min_tls}
  */
  readonly minTls?: string;
  /**
  * Zone ID of the custom domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_custom_domain#zone_id R2CustomDomain#zone_id}
  */
  readonly zoneId: string;
}
export interface R2CustomDomainStatus {
}

export function r2CustomDomainStatusToTerraform(struct?: R2CustomDomainStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function r2CustomDomainStatusToHclTerraform(struct?: R2CustomDomainStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class R2CustomDomainStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): R2CustomDomainStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: R2CustomDomainStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ownership - computed: true, optional: false, required: false
  public get ownership() {
    return this.getStringAttribute('ownership');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getStringAttribute('ssl');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_custom_domain cloudflare_r2_custom_domain}
*/
export class R2CustomDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_r2_custom_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a R2CustomDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the R2CustomDomain to import
  * @param importFromId The id of the existing R2CustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_custom_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the R2CustomDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_custom_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_custom_domain cloudflare_r2_custom_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options R2CustomDomainConfig
  */
  public constructor(scope: Construct, id: string, config: R2CustomDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_r2_custom_domain',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.8.2',
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
    this._bucketName = config.bucketName;
    this._domain = config.domain;
    this._enabled = config.enabled;
    this._jurisdiction = config.jurisdiction;
    this._minTls = config.minTls;
    this._zoneId = config.zoneId;
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

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // jurisdiction - computed: true, optional: true, required: false
  private _jurisdiction?: string; 
  public get jurisdiction() {
    return this.getStringAttribute('jurisdiction');
  }
  public set jurisdiction(value: string) {
    this._jurisdiction = value;
  }
  public resetJurisdiction() {
    this._jurisdiction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jurisdictionInput() {
    return this._jurisdiction;
  }

  // min_tls - computed: false, optional: true, required: false
  private _minTls?: string; 
  public get minTls() {
    return this.getStringAttribute('min_tls');
  }
  public set minTls(value: string) {
    this._minTls = value;
  }
  public resetMinTls() {
    this._minTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsInput() {
    return this._minTls;
  }

  // status - computed: true, optional: false, required: false
  private _status = new R2CustomDomainStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      domain: cdktf.stringToTerraform(this._domain),
      enabled: cdktf.booleanToTerraform(this._enabled),
      jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
      min_tls: cdktf.stringToTerraform(this._minTls),
      zone_id: cdktf.stringToTerraform(this._zoneId),
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
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      jurisdiction: {
        value: cdktf.stringToHclTerraform(this._jurisdiction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_tls: {
        value: cdktf.stringToHclTerraform(this._minTls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
