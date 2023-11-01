/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/web_analytics_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAnalyticsSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/web_analytics_site#account_id WebAnalyticsSite#account_id}
  */
  readonly accountId: string;
  /**
  * Whether Cloudflare will automatically inject the JavaScript snippet for orange-clouded sites. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/web_analytics_site#auto_install WebAnalyticsSite#auto_install}
  */
  readonly autoInstall: boolean | cdktf.IResolvable;
  /**
  * The hostname to use for gray-clouded sites. Must provide only one of `zone_tag`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/web_analytics_site#host WebAnalyticsSite#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/web_analytics_site#id WebAnalyticsSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The zone identifier for orange-clouded sites. Must provide only one of `host`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/web_analytics_site#zone_tag WebAnalyticsSite#zone_tag}
  */
  readonly zoneTag?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/web_analytics_site#timeouts WebAnalyticsSite#timeouts}
  */
  readonly timeouts?: WebAnalyticsSiteTimeouts;
}
export interface WebAnalyticsSiteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/web_analytics_site#create WebAnalyticsSite#create}
  */
  readonly create?: string;
}

export function webAnalyticsSiteTimeoutsToTerraform(struct?: WebAnalyticsSiteTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class WebAnalyticsSiteTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebAnalyticsSiteTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAnalyticsSiteTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/web_analytics_site cloudflare_web_analytics_site}
*/
export class WebAnalyticsSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_web_analytics_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAnalyticsSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAnalyticsSite to import
  * @param importFromId The id of the existing WebAnalyticsSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/web_analytics_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAnalyticsSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_web_analytics_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/web_analytics_site cloudflare_web_analytics_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAnalyticsSiteConfig
  */
  public constructor(scope: Construct, id: string, config: WebAnalyticsSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_web_analytics_site',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.18.0',
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
    this._autoInstall = config.autoInstall;
    this._host = config.host;
    this._id = config.id;
    this._zoneTag = config.zoneTag;
    this._timeouts.internalValue = config.timeouts;
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

  // auto_install - computed: false, optional: false, required: true
  private _autoInstall?: boolean | cdktf.IResolvable; 
  public get autoInstall() {
    return this.getBooleanAttribute('auto_install');
  }
  public set autoInstall(value: boolean | cdktf.IResolvable) {
    this._autoInstall = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInstallInput() {
    return this._autoInstall;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // ruleset_id - computed: true, optional: false, required: false
  public get rulesetId() {
    return this.getStringAttribute('ruleset_id');
  }

  // site_tag - computed: true, optional: false, required: false
  public get siteTag() {
    return this.getStringAttribute('site_tag');
  }

  // site_token - computed: true, optional: false, required: false
  public get siteToken() {
    return this.getStringAttribute('site_token');
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // zone_tag - computed: false, optional: true, required: false
  private _zoneTag?: string; 
  public get zoneTag() {
    return this.getStringAttribute('zone_tag');
  }
  public set zoneTag(value: string) {
    this._zoneTag = value;
  }
  public resetZoneTag() {
    this._zoneTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTagInput() {
    return this._zoneTag;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WebAnalyticsSiteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WebAnalyticsSiteTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      auto_install: cdktf.booleanToTerraform(this._autoInstall),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      zone_tag: cdktf.stringToTerraform(this._zoneTag),
      timeouts: webAnalyticsSiteTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
