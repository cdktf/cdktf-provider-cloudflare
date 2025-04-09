// https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PagesProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#account_id PagesProject#account_id}
  */
  readonly accountId: string;
  /**
  * Configs for the project build process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#build_config PagesProject#build_config}
  */
  readonly buildConfig?: PagesProjectBuildConfig;
  /**
  * Configs for deployments in a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#deployment_configs PagesProject#deployment_configs}
  */
  readonly deploymentConfigs?: PagesProjectDeploymentConfigs;
  /**
  * Name of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#name PagesProject#name}
  */
  readonly name: string;
  /**
  * Production branch of the project. Used to identify production deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#production_branch PagesProject#production_branch}
  */
  readonly productionBranch?: string;
}
export interface PagesProjectBuildConfig {
  /**
  * Enable build caching for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#build_caching PagesProject#build_caching}
  */
  readonly buildCaching?: boolean | cdktf.IResolvable;
  /**
  * Command used to build project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#build_command PagesProject#build_command}
  */
  readonly buildCommand?: string;
  /**
  * Output directory of the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#destination_dir PagesProject#destination_dir}
  */
  readonly destinationDir?: string;
  /**
  * Directory to run the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#root_dir PagesProject#root_dir}
  */
  readonly rootDir?: string;
  /**
  * The classifying tag for analytics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#web_analytics_tag PagesProject#web_analytics_tag}
  */
  readonly webAnalyticsTag?: string;
  /**
  * The auth token for analytics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#web_analytics_token PagesProject#web_analytics_token}
  */
  readonly webAnalyticsToken?: string;
}

export function pagesProjectBuildConfigToTerraform(struct?: PagesProjectBuildConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_caching: cdktf.booleanToTerraform(struct!.buildCaching),
    build_command: cdktf.stringToTerraform(struct!.buildCommand),
    destination_dir: cdktf.stringToTerraform(struct!.destinationDir),
    root_dir: cdktf.stringToTerraform(struct!.rootDir),
    web_analytics_tag: cdktf.stringToTerraform(struct!.webAnalyticsTag),
    web_analytics_token: cdktf.stringToTerraform(struct!.webAnalyticsToken),
  }
}


export function pagesProjectBuildConfigToHclTerraform(struct?: PagesProjectBuildConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_caching: {
      value: cdktf.booleanToHclTerraform(struct!.buildCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    build_command: {
      value: cdktf.stringToHclTerraform(struct!.buildCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_dir: {
      value: cdktf.stringToHclTerraform(struct!.destinationDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_dir: {
      value: cdktf.stringToHclTerraform(struct!.rootDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_analytics_tag: {
      value: cdktf.stringToHclTerraform(struct!.webAnalyticsTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_analytics_token: {
      value: cdktf.stringToHclTerraform(struct!.webAnalyticsToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectBuildConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectBuildConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildCaching = this._buildCaching;
    }
    if (this._buildCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildCommand = this._buildCommand;
    }
    if (this._destinationDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDir = this._destinationDir;
    }
    if (this._rootDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDir = this._rootDir;
    }
    if (this._webAnalyticsTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAnalyticsTag = this._webAnalyticsTag;
    }
    if (this._webAnalyticsToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAnalyticsToken = this._webAnalyticsToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectBuildConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildCaching = undefined;
      this._buildCommand = undefined;
      this._destinationDir = undefined;
      this._rootDir = undefined;
      this._webAnalyticsTag = undefined;
      this._webAnalyticsToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildCaching = value.buildCaching;
      this._buildCommand = value.buildCommand;
      this._destinationDir = value.destinationDir;
      this._rootDir = value.rootDir;
      this._webAnalyticsTag = value.webAnalyticsTag;
      this._webAnalyticsToken = value.webAnalyticsToken;
    }
  }

  // build_caching - computed: true, optional: true, required: false
  private _buildCaching?: boolean | cdktf.IResolvable; 
  public get buildCaching() {
    return this.getBooleanAttribute('build_caching');
  }
  public set buildCaching(value: boolean | cdktf.IResolvable) {
    this._buildCaching = value;
  }
  public resetBuildCaching() {
    this._buildCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCachingInput() {
    return this._buildCaching;
  }

  // build_command - computed: true, optional: true, required: false
  private _buildCommand?: string; 
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }
  public set buildCommand(value: string) {
    this._buildCommand = value;
  }
  public resetBuildCommand() {
    this._buildCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCommandInput() {
    return this._buildCommand;
  }

  // destination_dir - computed: true, optional: true, required: false
  private _destinationDir?: string; 
  public get destinationDir() {
    return this.getStringAttribute('destination_dir');
  }
  public set destinationDir(value: string) {
    this._destinationDir = value;
  }
  public resetDestinationDir() {
    this._destinationDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDirInput() {
    return this._destinationDir;
  }

  // root_dir - computed: true, optional: true, required: false
  private _rootDir?: string; 
  public get rootDir() {
    return this.getStringAttribute('root_dir');
  }
  public set rootDir(value: string) {
    this._rootDir = value;
  }
  public resetRootDir() {
    this._rootDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirInput() {
    return this._rootDir;
  }

  // web_analytics_tag - computed: true, optional: true, required: false
  private _webAnalyticsTag?: string; 
  public get webAnalyticsTag() {
    return this.getStringAttribute('web_analytics_tag');
  }
  public set webAnalyticsTag(value: string) {
    this._webAnalyticsTag = value;
  }
  public resetWebAnalyticsTag() {
    this._webAnalyticsTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAnalyticsTagInput() {
    return this._webAnalyticsTag;
  }

  // web_analytics_token - computed: true, optional: true, required: false
  private _webAnalyticsToken?: string; 
  public get webAnalyticsToken() {
    return this.getStringAttribute('web_analytics_token');
  }
  public set webAnalyticsToken(value: string) {
    this._webAnalyticsToken = value;
  }
  public resetWebAnalyticsToken() {
    this._webAnalyticsToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAnalyticsTokenInput() {
    return this._webAnalyticsToken;
  }
}
export interface PagesProjectCanonicalDeploymentBuildConfig {
}

export function pagesProjectCanonicalDeploymentBuildConfigToTerraform(struct?: PagesProjectCanonicalDeploymentBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentBuildConfigToHclTerraform(struct?: PagesProjectCanonicalDeploymentBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentBuildConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectCanonicalDeploymentBuildConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeploymentBuildConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build_caching - computed: true, optional: false, required: false
  public get buildCaching() {
    return this.getBooleanAttribute('build_caching');
  }

  // build_command - computed: true, optional: false, required: false
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }

  // destination_dir - computed: true, optional: false, required: false
  public get destinationDir() {
    return this.getStringAttribute('destination_dir');
  }

  // root_dir - computed: true, optional: false, required: false
  public get rootDir() {
    return this.getStringAttribute('root_dir');
  }

  // web_analytics_tag - computed: true, optional: false, required: false
  public get webAnalyticsTag() {
    return this.getStringAttribute('web_analytics_tag');
  }

  // web_analytics_token - computed: true, optional: false, required: false
  public get webAnalyticsToken() {
    return this.getStringAttribute('web_analytics_token');
  }
}
export interface PagesProjectCanonicalDeploymentDeploymentTriggerMetadata {
}

export function pagesProjectCanonicalDeploymentDeploymentTriggerMetadataToTerraform(struct?: PagesProjectCanonicalDeploymentDeploymentTriggerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform(struct?: PagesProjectCanonicalDeploymentDeploymentTriggerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectCanonicalDeploymentDeploymentTriggerMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeploymentDeploymentTriggerMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // commit_hash - computed: true, optional: false, required: false
  public get commitHash() {
    return this.getStringAttribute('commit_hash');
  }

  // commit_message - computed: true, optional: false, required: false
  public get commitMessage() {
    return this.getStringAttribute('commit_message');
  }
}
export interface PagesProjectCanonicalDeploymentDeploymentTrigger {
}

export function pagesProjectCanonicalDeploymentDeploymentTriggerToTerraform(struct?: PagesProjectCanonicalDeploymentDeploymentTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentDeploymentTriggerToHclTerraform(struct?: PagesProjectCanonicalDeploymentDeploymentTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectCanonicalDeploymentDeploymentTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeploymentDeploymentTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface PagesProjectCanonicalDeploymentEnvVars {
}

export function pagesProjectCanonicalDeploymentEnvVarsToTerraform(struct?: PagesProjectCanonicalDeploymentEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentEnvVarsToHclTerraform(struct?: PagesProjectCanonicalDeploymentEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectCanonicalDeploymentEnvVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeploymentEnvVars | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class PagesProjectCanonicalDeploymentEnvVarsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectCanonicalDeploymentEnvVarsOutputReference {
    return new PagesProjectCanonicalDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectCanonicalDeploymentLatestStage {
}

export function pagesProjectCanonicalDeploymentLatestStageToTerraform(struct?: PagesProjectCanonicalDeploymentLatestStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentLatestStageToHclTerraform(struct?: PagesProjectCanonicalDeploymentLatestStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentLatestStageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectCanonicalDeploymentLatestStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeploymentLatestStage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ended_on - computed: true, optional: false, required: false
  public get endedOn() {
    return this.getStringAttribute('ended_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // started_on - computed: true, optional: false, required: false
  public get startedOn() {
    return this.getStringAttribute('started_on');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface PagesProjectCanonicalDeploymentSourceConfig {
}

export function pagesProjectCanonicalDeploymentSourceConfigToTerraform(struct?: PagesProjectCanonicalDeploymentSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentSourceConfigToHclTerraform(struct?: PagesProjectCanonicalDeploymentSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectCanonicalDeploymentSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeploymentSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployments_enabled - computed: true, optional: false, required: false
  public get deploymentsEnabled() {
    return this.getBooleanAttribute('deployments_enabled');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // path_excludes - computed: true, optional: false, required: false
  public get pathExcludes() {
    return this.getListAttribute('path_excludes');
  }

  // path_includes - computed: true, optional: false, required: false
  public get pathIncludes() {
    return this.getListAttribute('path_includes');
  }

  // pr_comments_enabled - computed: true, optional: false, required: false
  public get prCommentsEnabled() {
    return this.getBooleanAttribute('pr_comments_enabled');
  }

  // preview_branch_excludes - computed: true, optional: false, required: false
  public get previewBranchExcludes() {
    return this.getListAttribute('preview_branch_excludes');
  }

  // preview_branch_includes - computed: true, optional: false, required: false
  public get previewBranchIncludes() {
    return this.getListAttribute('preview_branch_includes');
  }

  // preview_deployment_setting - computed: true, optional: false, required: false
  public get previewDeploymentSetting() {
    return this.getStringAttribute('preview_deployment_setting');
  }

  // production_branch - computed: true, optional: false, required: false
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }

  // production_deployments_enabled - computed: true, optional: false, required: false
  public get productionDeploymentsEnabled() {
    return this.getBooleanAttribute('production_deployments_enabled');
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
}
export interface PagesProjectCanonicalDeploymentSource {
}

export function pagesProjectCanonicalDeploymentSourceToTerraform(struct?: PagesProjectCanonicalDeploymentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentSourceToHclTerraform(struct?: PagesProjectCanonicalDeploymentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectCanonicalDeploymentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeploymentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new PagesProjectCanonicalDeploymentSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface PagesProjectCanonicalDeploymentStages {
}

export function pagesProjectCanonicalDeploymentStagesToTerraform(struct?: PagesProjectCanonicalDeploymentStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentStagesToHclTerraform(struct?: PagesProjectCanonicalDeploymentStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentStagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PagesProjectCanonicalDeploymentStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeploymentStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ended_on - computed: true, optional: false, required: false
  public get endedOn() {
    return this.getStringAttribute('ended_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // started_on - computed: true, optional: false, required: false
  public get startedOn() {
    return this.getStringAttribute('started_on');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class PagesProjectCanonicalDeploymentStagesList extends cdktf.ComplexList {

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
  public get(index: number): PagesProjectCanonicalDeploymentStagesOutputReference {
    return new PagesProjectCanonicalDeploymentStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PagesProjectCanonicalDeployment {
}

export function pagesProjectCanonicalDeploymentToTerraform(struct?: PagesProjectCanonicalDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentToHclTerraform(struct?: PagesProjectCanonicalDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectCanonicalDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // build_config - computed: true, optional: false, required: false
  private _buildConfig = new PagesProjectCanonicalDeploymentBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // deployment_trigger - computed: true, optional: false, required: false
  private _deploymentTrigger = new PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference(this, "deployment_trigger");
  public get deploymentTrigger() {
    return this._deploymentTrigger;
  }

  // env_vars - computed: true, optional: false, required: false
  private _envVars = new PagesProjectCanonicalDeploymentEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_skipped - computed: true, optional: false, required: false
  public get isSkipped() {
    return this.getBooleanAttribute('is_skipped');
  }

  // latest_stage - computed: true, optional: false, required: false
  private _latestStage = new PagesProjectCanonicalDeploymentLatestStageOutputReference(this, "latest_stage");
  public get latestStage() {
    return this._latestStage;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // short_id - computed: true, optional: false, required: false
  public get shortId() {
    return this.getStringAttribute('short_id');
  }

  // source - computed: true, optional: false, required: false
  private _source = new PagesProjectCanonicalDeploymentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // stages - computed: true, optional: false, required: false
  private _stages = new PagesProjectCanonicalDeploymentStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface PagesProjectDeploymentConfigsPreviewAiBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#project_id PagesProject#project_id}
  */
  readonly projectId?: string;
}

export function pagesProjectDeploymentConfigsPreviewAiBindingsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewAiBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function pagesProjectDeploymentConfigsPreviewAiBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewAiBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewAiBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewAiBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}

export class PagesProjectDeploymentConfigsPreviewAiBindingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewAiBindings } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference {
    return new PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets {
  /**
  * Name of the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#dataset PagesProject#dataset}
  */
  readonly dataset?: string;
}

export function pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset: cdktf.stringToTerraform(struct!.dataset),
  }
}


export function pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset: {
      value: cdktf.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataset = value.dataset;
    }
  }

  // dataset - computed: true, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }
}

export class PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference {
    return new PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewBrowsers {
}

export function pagesProjectDeploymentConfigsPreviewBrowsersToTerraform(struct?: PagesProjectDeploymentConfigsPreviewBrowsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectDeploymentConfigsPreviewBrowsersToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewBrowsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectDeploymentConfigsPreviewBrowsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewBrowsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewBrowsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class PagesProjectDeploymentConfigsPreviewBrowsersMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewBrowsers } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewBrowsersOutputReference {
    return new PagesProjectDeploymentConfigsPreviewBrowsersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewD1Databases {
  /**
  * UUID of the D1 database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#id PagesProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function pagesProjectDeploymentConfigsPreviewD1DatabasesToTerraform(struct?: PagesProjectDeploymentConfigsPreviewD1Databases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function pagesProjectDeploymentConfigsPreviewD1DatabasesToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewD1Databases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewD1Databases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewD1Databases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

export class PagesProjectDeploymentConfigsPreviewD1DatabasesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewD1Databases } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference {
    return new PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces {
  /**
  * ID of the Durable Object namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#namespace_id PagesProject#namespace_id}
  */
  readonly namespaceId?: string;
}

export function pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToTerraform(struct?: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
  }
}


export function pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_id: {
      value: cdktf.stringToHclTerraform(struct!.namespaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceId = value.namespaceId;
    }
  }

  // namespace_id - computed: true, optional: true, required: false
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  public resetNamespaceId() {
    this._namespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }
}

export class PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference {
    return new PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewEnvVars {
  /**
  * Available values: "plain_text".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#type PagesProject#type}
  */
  readonly type: string;
  /**
  * Environment variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#value PagesProject#value}
  */
  readonly value: string;
}

export function pagesProjectDeploymentConfigsPreviewEnvVarsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pagesProjectDeploymentConfigsPreviewEnvVarsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewEnvVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PagesProjectDeploymentConfigsPreviewEnvVarsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewEnvVars } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference {
    return new PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewHyperdriveBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#id PagesProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewHyperdriveBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewHyperdriveBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewHyperdriveBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewHyperdriveBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

export class PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewHyperdriveBindings } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference {
    return new PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewKvNamespaces {
  /**
  * ID of the KV namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#namespace_id PagesProject#namespace_id}
  */
  readonly namespaceId?: string;
}

export function pagesProjectDeploymentConfigsPreviewKvNamespacesToTerraform(struct?: PagesProjectDeploymentConfigsPreviewKvNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
  }
}


export function pagesProjectDeploymentConfigsPreviewKvNamespacesToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewKvNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_id: {
      value: cdktf.stringToHclTerraform(struct!.namespaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewKvNamespaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewKvNamespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceId = value.namespaceId;
    }
  }

  // namespace_id - computed: true, optional: true, required: false
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  public resetNamespaceId() {
    this._namespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }
}

export class PagesProjectDeploymentConfigsPreviewKvNamespacesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewKvNamespaces } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference {
    return new PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewMtlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#certificate_id PagesProject#certificate_id}
  */
  readonly certificateId?: string;
}

export function pagesProjectDeploymentConfigsPreviewMtlsCertificatesToTerraform(struct?: PagesProjectDeploymentConfigsPreviewMtlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
  }
}


export function pagesProjectDeploymentConfigsPreviewMtlsCertificatesToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewMtlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewMtlsCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewMtlsCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateId = value.certificateId;
    }
  }

  // certificate_id - computed: true, optional: true, required: false
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
}

export class PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewMtlsCertificates } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference {
    return new PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewPlacement {
  /**
  * Placement mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#mode PagesProject#mode}
  */
  readonly mode?: string;
}

export function pagesProjectDeploymentConfigsPreviewPlacementToTerraform(struct?: PagesProjectDeploymentConfigsPreviewPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function pagesProjectDeploymentConfigsPreviewPlacementToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewPlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewPlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface PagesProjectDeploymentConfigsPreviewQueueProducers {
  /**
  * Name of the Queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#name PagesProject#name}
  */
  readonly name?: string;
}

export function pagesProjectDeploymentConfigsPreviewQueueProducersToTerraform(struct?: PagesProjectDeploymentConfigsPreviewQueueProducers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function pagesProjectDeploymentConfigsPreviewQueueProducersToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewQueueProducers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewQueueProducers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewQueueProducers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
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
}

export class PagesProjectDeploymentConfigsPreviewQueueProducersMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewQueueProducers } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference {
    return new PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewR2Buckets {
  /**
  * Jurisdiction of the R2 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#jurisdiction PagesProject#jurisdiction}
  */
  readonly jurisdiction?: string;
  /**
  * Name of the R2 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#name PagesProject#name}
  */
  readonly name?: string;
}

export function pagesProjectDeploymentConfigsPreviewR2BucketsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewR2Buckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jurisdiction: cdktf.stringToTerraform(struct!.jurisdiction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function pagesProjectDeploymentConfigsPreviewR2BucketsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewR2Buckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jurisdiction: {
      value: cdktf.stringToHclTerraform(struct!.jurisdiction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewR2Buckets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jurisdiction !== undefined) {
      hasAnyValues = true;
      internalValueResult.jurisdiction = this._jurisdiction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewR2Buckets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jurisdiction = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jurisdiction = value.jurisdiction;
      this._name = value.name;
    }
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

  // name - computed: true, optional: true, required: false
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
}

export class PagesProjectDeploymentConfigsPreviewR2BucketsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewR2Buckets } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference {
    return new PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewServices {
  /**
  * The entrypoint to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#entrypoint PagesProject#entrypoint}
  */
  readonly entrypoint?: string;
  /**
  * The Service environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#environment PagesProject#environment}
  */
  readonly environment?: string;
  /**
  * The Service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#service PagesProject#service}
  */
  readonly service?: string;
}

export function pagesProjectDeploymentConfigsPreviewServicesToTerraform(struct?: PagesProjectDeploymentConfigsPreviewServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entrypoint: cdktf.stringToTerraform(struct!.entrypoint),
    environment: cdktf.stringToTerraform(struct!.environment),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function pagesProjectDeploymentConfigsPreviewServicesToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entrypoint: {
      value: cdktf.stringToHclTerraform(struct!.entrypoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entrypoint = undefined;
      this._environment = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entrypoint = value.entrypoint;
      this._environment = value.environment;
      this._service = value.service;
    }
  }

  // entrypoint - computed: true, optional: true, required: false
  private _entrypoint?: string; 
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }
  public set entrypoint(value: string) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class PagesProjectDeploymentConfigsPreviewServicesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewServices } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewServicesOutputReference {
    return new PagesProjectDeploymentConfigsPreviewServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewVectorizeBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#index_name PagesProject#index_name}
  */
  readonly indexName?: string;
}

export function pagesProjectDeploymentConfigsPreviewVectorizeBindingsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewVectorizeBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index_name: cdktf.stringToTerraform(struct!.indexName),
  }
}


export function pagesProjectDeploymentConfigsPreviewVectorizeBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewVectorizeBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index_name: {
      value: cdktf.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewVectorizeBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewVectorizeBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexName = value.indexName;
    }
  }

  // index_name - computed: true, optional: true, required: false
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }
}

export class PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewVectorizeBindings } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference {
    return new PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreview {
  /**
  * Constellation bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#ai_bindings PagesProject#ai_bindings}
  */
  readonly aiBindings?: { [key: string]: PagesProjectDeploymentConfigsPreviewAiBindings } | cdktf.IResolvable;
  /**
  * Analytics Engine bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#analytics_engine_datasets PagesProject#analytics_engine_datasets}
  */
  readonly analyticsEngineDatasets?: { [key: string]: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets } | cdktf.IResolvable;
  /**
  * Browser bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#browsers PagesProject#browsers}
  */
  readonly browsers?: { [key: string]: PagesProjectDeploymentConfigsPreviewBrowsers } | cdktf.IResolvable;
  /**
  * Compatibility date used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#compatibility_date PagesProject#compatibility_date}
  */
  readonly compatibilityDate?: string;
  /**
  * Compatibility flags used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#compatibility_flags PagesProject#compatibility_flags}
  */
  readonly compatibilityFlags?: string[];
  /**
  * D1 databases used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#d1_databases PagesProject#d1_databases}
  */
  readonly d1Databases?: { [key: string]: PagesProjectDeploymentConfigsPreviewD1Databases } | cdktf.IResolvable;
  /**
  * Durable Object namespaces used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}
  */
  readonly durableObjectNamespaces?: { [key: string]: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces } | cdktf.IResolvable;
  /**
  * Environment variables used for builds and Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#env_vars PagesProject#env_vars}
  */
  readonly envVars?: { [key: string]: PagesProjectDeploymentConfigsPreviewEnvVars } | cdktf.IResolvable;
  /**
  * Hyperdrive bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#hyperdrive_bindings PagesProject#hyperdrive_bindings}
  */
  readonly hyperdriveBindings?: { [key: string]: PagesProjectDeploymentConfigsPreviewHyperdriveBindings } | cdktf.IResolvable;
  /**
  * KV namespaces used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#kv_namespaces PagesProject#kv_namespaces}
  */
  readonly kvNamespaces?: { [key: string]: PagesProjectDeploymentConfigsPreviewKvNamespaces } | cdktf.IResolvable;
  /**
  * mTLS bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#mtls_certificates PagesProject#mtls_certificates}
  */
  readonly mtlsCertificates?: { [key: string]: PagesProjectDeploymentConfigsPreviewMtlsCertificates } | cdktf.IResolvable;
  /**
  * Placement setting used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#placement PagesProject#placement}
  */
  readonly placement?: PagesProjectDeploymentConfigsPreviewPlacement;
  /**
  * Queue Producer bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#queue_producers PagesProject#queue_producers}
  */
  readonly queueProducers?: { [key: string]: PagesProjectDeploymentConfigsPreviewQueueProducers } | cdktf.IResolvable;
  /**
  * R2 buckets used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#r2_buckets PagesProject#r2_buckets}
  */
  readonly r2Buckets?: { [key: string]: PagesProjectDeploymentConfigsPreviewR2Buckets } | cdktf.IResolvable;
  /**
  * Services used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#services PagesProject#services}
  */
  readonly services?: { [key: string]: PagesProjectDeploymentConfigsPreviewServices } | cdktf.IResolvable;
  /**
  * Vectorize bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#vectorize_bindings PagesProject#vectorize_bindings}
  */
  readonly vectorizeBindings?: { [key: string]: PagesProjectDeploymentConfigsPreviewVectorizeBindings } | cdktf.IResolvable;
}

export function pagesProjectDeploymentConfigsPreviewToTerraform(struct?: PagesProjectDeploymentConfigsPreview | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewAiBindingsToTerraform)(struct!.aiBindings),
    analytics_engine_datasets: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform)(struct!.analyticsEngineDatasets),
    browsers: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewBrowsersToTerraform)(struct!.browsers),
    compatibility_date: cdktf.stringToTerraform(struct!.compatibilityDate),
    compatibility_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.compatibilityFlags),
    d1_databases: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewD1DatabasesToTerraform)(struct!.d1Databases),
    durable_object_namespaces: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToTerraform)(struct!.durableObjectNamespaces),
    env_vars: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewEnvVarsToTerraform)(struct!.envVars),
    hyperdrive_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToTerraform)(struct!.hyperdriveBindings),
    kv_namespaces: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewKvNamespacesToTerraform)(struct!.kvNamespaces),
    mtls_certificates: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewMtlsCertificatesToTerraform)(struct!.mtlsCertificates),
    placement: pagesProjectDeploymentConfigsPreviewPlacementToTerraform(struct!.placement),
    queue_producers: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewQueueProducersToTerraform)(struct!.queueProducers),
    r2_buckets: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewR2BucketsToTerraform)(struct!.r2Buckets),
    services: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewServicesToTerraform)(struct!.services),
    vectorize_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewVectorizeBindingsToTerraform)(struct!.vectorizeBindings),
  }
}


export function pagesProjectDeploymentConfigsPreviewToHclTerraform(struct?: PagesProjectDeploymentConfigsPreview | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai_bindings: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewAiBindingsToHclTerraform)(struct!.aiBindings),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewAiBindingsMap",
    },
    analytics_engine_datasets: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform)(struct!.analyticsEngineDatasets),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap",
    },
    browsers: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewBrowsersToHclTerraform)(struct!.browsers),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewBrowsersMap",
    },
    compatibility_date: {
      value: cdktf.stringToHclTerraform(struct!.compatibilityDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compatibility_flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.compatibilityFlags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    d1_databases: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewD1DatabasesToHclTerraform)(struct!.d1Databases),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewD1DatabasesMap",
    },
    durable_object_namespaces: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform)(struct!.durableObjectNamespaces),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap",
    },
    env_vars: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewEnvVarsToHclTerraform)(struct!.envVars),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewEnvVarsMap",
    },
    hyperdrive_bindings: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform)(struct!.hyperdriveBindings),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap",
    },
    kv_namespaces: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewKvNamespacesToHclTerraform)(struct!.kvNamespaces),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewKvNamespacesMap",
    },
    mtls_certificates: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewMtlsCertificatesToHclTerraform)(struct!.mtlsCertificates),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap",
    },
    placement: {
      value: pagesProjectDeploymentConfigsPreviewPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "struct",
      storageClassType: "PagesProjectDeploymentConfigsPreviewPlacement",
    },
    queue_producers: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewQueueProducersToHclTerraform)(struct!.queueProducers),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewQueueProducersMap",
    },
    r2_buckets: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewR2BucketsToHclTerraform)(struct!.r2Buckets),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewR2BucketsMap",
    },
    services: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewServicesToHclTerraform)(struct!.services),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewServicesMap",
    },
    vectorize_bindings: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewVectorizeBindingsToHclTerraform)(struct!.vectorizeBindings),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreview | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiBindings = this._aiBindings?.internalValue;
    }
    if (this._analyticsEngineDatasets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyticsEngineDatasets = this._analyticsEngineDatasets?.internalValue;
    }
    if (this._browsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.browsers = this._browsers?.internalValue;
    }
    if (this._compatibilityDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibilityDate = this._compatibilityDate;
    }
    if (this._compatibilityFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibilityFlags = this._compatibilityFlags;
    }
    if (this._d1Databases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.d1Databases = this._d1Databases?.internalValue;
    }
    if (this._durableObjectNamespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.durableObjectNamespaces = this._durableObjectNamespaces?.internalValue;
    }
    if (this._envVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVars = this._envVars?.internalValue;
    }
    if (this._hyperdriveBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperdriveBindings = this._hyperdriveBindings?.internalValue;
    }
    if (this._kvNamespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kvNamespaces = this._kvNamespaces?.internalValue;
    }
    if (this._mtlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsCertificates = this._mtlsCertificates?.internalValue;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._queueProducers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueProducers = this._queueProducers?.internalValue;
    }
    if (this._r2Buckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.r2Buckets = this._r2Buckets?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._vectorizeBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorizeBindings = this._vectorizeBindings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreview | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aiBindings.internalValue = undefined;
      this._analyticsEngineDatasets.internalValue = undefined;
      this._browsers.internalValue = undefined;
      this._compatibilityDate = undefined;
      this._compatibilityFlags = undefined;
      this._d1Databases.internalValue = undefined;
      this._durableObjectNamespaces.internalValue = undefined;
      this._envVars.internalValue = undefined;
      this._hyperdriveBindings.internalValue = undefined;
      this._kvNamespaces.internalValue = undefined;
      this._mtlsCertificates.internalValue = undefined;
      this._placement.internalValue = undefined;
      this._queueProducers.internalValue = undefined;
      this._r2Buckets.internalValue = undefined;
      this._services.internalValue = undefined;
      this._vectorizeBindings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aiBindings.internalValue = value.aiBindings;
      this._analyticsEngineDatasets.internalValue = value.analyticsEngineDatasets;
      this._browsers.internalValue = value.browsers;
      this._compatibilityDate = value.compatibilityDate;
      this._compatibilityFlags = value.compatibilityFlags;
      this._d1Databases.internalValue = value.d1Databases;
      this._durableObjectNamespaces.internalValue = value.durableObjectNamespaces;
      this._envVars.internalValue = value.envVars;
      this._hyperdriveBindings.internalValue = value.hyperdriveBindings;
      this._kvNamespaces.internalValue = value.kvNamespaces;
      this._mtlsCertificates.internalValue = value.mtlsCertificates;
      this._placement.internalValue = value.placement;
      this._queueProducers.internalValue = value.queueProducers;
      this._r2Buckets.internalValue = value.r2Buckets;
      this._services.internalValue = value.services;
      this._vectorizeBindings.internalValue = value.vectorizeBindings;
    }
  }

  // ai_bindings - computed: true, optional: true, required: false
  private _aiBindings = new PagesProjectDeploymentConfigsPreviewAiBindingsMap(this, "ai_bindings");
  public get aiBindings() {
    return this._aiBindings;
  }
  public putAiBindings(value: { [key: string]: PagesProjectDeploymentConfigsPreviewAiBindings } | cdktf.IResolvable) {
    this._aiBindings.internalValue = value;
  }
  public resetAiBindings() {
    this._aiBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiBindingsInput() {
    return this._aiBindings.internalValue;
  }

  // analytics_engine_datasets - computed: true, optional: true, required: false
  private _analyticsEngineDatasets = new PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap(this, "analytics_engine_datasets");
  public get analyticsEngineDatasets() {
    return this._analyticsEngineDatasets;
  }
  public putAnalyticsEngineDatasets(value: { [key: string]: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets } | cdktf.IResolvable) {
    this._analyticsEngineDatasets.internalValue = value;
  }
  public resetAnalyticsEngineDatasets() {
    this._analyticsEngineDatasets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsEngineDatasetsInput() {
    return this._analyticsEngineDatasets.internalValue;
  }

  // browsers - computed: true, optional: true, required: false
  private _browsers = new PagesProjectDeploymentConfigsPreviewBrowsersMap(this, "browsers");
  public get browsers() {
    return this._browsers;
  }
  public putBrowsers(value: { [key: string]: PagesProjectDeploymentConfigsPreviewBrowsers } | cdktf.IResolvable) {
    this._browsers.internalValue = value;
  }
  public resetBrowsers() {
    this._browsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browsersInput() {
    return this._browsers.internalValue;
  }

  // compatibility_date - computed: true, optional: true, required: false
  private _compatibilityDate?: string; 
  public get compatibilityDate() {
    return this.getStringAttribute('compatibility_date');
  }
  public set compatibilityDate(value: string) {
    this._compatibilityDate = value;
  }
  public resetCompatibilityDate() {
    this._compatibilityDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityDateInput() {
    return this._compatibilityDate;
  }

  // compatibility_flags - computed: true, optional: true, required: false
  private _compatibilityFlags?: string[]; 
  public get compatibilityFlags() {
    return this.getListAttribute('compatibility_flags');
  }
  public set compatibilityFlags(value: string[]) {
    this._compatibilityFlags = value;
  }
  public resetCompatibilityFlags() {
    this._compatibilityFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityFlagsInput() {
    return this._compatibilityFlags;
  }

  // d1_databases - computed: true, optional: true, required: false
  private _d1Databases = new PagesProjectDeploymentConfigsPreviewD1DatabasesMap(this, "d1_databases");
  public get d1Databases() {
    return this._d1Databases;
  }
  public putD1Databases(value: { [key: string]: PagesProjectDeploymentConfigsPreviewD1Databases } | cdktf.IResolvable) {
    this._d1Databases.internalValue = value;
  }
  public resetD1Databases() {
    this._d1Databases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get d1DatabasesInput() {
    return this._d1Databases.internalValue;
  }

  // durable_object_namespaces - computed: true, optional: true, required: false
  private _durableObjectNamespaces = new PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap(this, "durable_object_namespaces");
  public get durableObjectNamespaces() {
    return this._durableObjectNamespaces;
  }
  public putDurableObjectNamespaces(value: { [key: string]: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces } | cdktf.IResolvable) {
    this._durableObjectNamespaces.internalValue = value;
  }
  public resetDurableObjectNamespaces() {
    this._durableObjectNamespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durableObjectNamespacesInput() {
    return this._durableObjectNamespaces.internalValue;
  }

  // env_vars - computed: true, optional: true, required: false
  private _envVars = new PagesProjectDeploymentConfigsPreviewEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: { [key: string]: PagesProjectDeploymentConfigsPreviewEnvVars } | cdktf.IResolvable) {
    this._envVars.internalValue = value;
  }
  public resetEnvVars() {
    this._envVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars.internalValue;
  }

  // hyperdrive_bindings - computed: true, optional: true, required: false
  private _hyperdriveBindings = new PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap(this, "hyperdrive_bindings");
  public get hyperdriveBindings() {
    return this._hyperdriveBindings;
  }
  public putHyperdriveBindings(value: { [key: string]: PagesProjectDeploymentConfigsPreviewHyperdriveBindings } | cdktf.IResolvable) {
    this._hyperdriveBindings.internalValue = value;
  }
  public resetHyperdriveBindings() {
    this._hyperdriveBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperdriveBindingsInput() {
    return this._hyperdriveBindings.internalValue;
  }

  // kv_namespaces - computed: true, optional: true, required: false
  private _kvNamespaces = new PagesProjectDeploymentConfigsPreviewKvNamespacesMap(this, "kv_namespaces");
  public get kvNamespaces() {
    return this._kvNamespaces;
  }
  public putKvNamespaces(value: { [key: string]: PagesProjectDeploymentConfigsPreviewKvNamespaces } | cdktf.IResolvable) {
    this._kvNamespaces.internalValue = value;
  }
  public resetKvNamespaces() {
    this._kvNamespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvNamespacesInput() {
    return this._kvNamespaces.internalValue;
  }

  // mtls_certificates - computed: true, optional: true, required: false
  private _mtlsCertificates = new PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap(this, "mtls_certificates");
  public get mtlsCertificates() {
    return this._mtlsCertificates;
  }
  public putMtlsCertificates(value: { [key: string]: PagesProjectDeploymentConfigsPreviewMtlsCertificates } | cdktf.IResolvable) {
    this._mtlsCertificates.internalValue = value;
  }
  public resetMtlsCertificates() {
    this._mtlsCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsCertificatesInput() {
    return this._mtlsCertificates.internalValue;
  }

  // placement - computed: true, optional: true, required: false
  private _placement = new PagesProjectDeploymentConfigsPreviewPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: PagesProjectDeploymentConfigsPreviewPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // queue_producers - computed: true, optional: true, required: false
  private _queueProducers = new PagesProjectDeploymentConfigsPreviewQueueProducersMap(this, "queue_producers");
  public get queueProducers() {
    return this._queueProducers;
  }
  public putQueueProducers(value: { [key: string]: PagesProjectDeploymentConfigsPreviewQueueProducers } | cdktf.IResolvable) {
    this._queueProducers.internalValue = value;
  }
  public resetQueueProducers() {
    this._queueProducers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueProducersInput() {
    return this._queueProducers.internalValue;
  }

  // r2_buckets - computed: true, optional: true, required: false
  private _r2Buckets = new PagesProjectDeploymentConfigsPreviewR2BucketsMap(this, "r2_buckets");
  public get r2Buckets() {
    return this._r2Buckets;
  }
  public putR2Buckets(value: { [key: string]: PagesProjectDeploymentConfigsPreviewR2Buckets } | cdktf.IResolvable) {
    this._r2Buckets.internalValue = value;
  }
  public resetR2Buckets() {
    this._r2Buckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get r2BucketsInput() {
    return this._r2Buckets.internalValue;
  }

  // services - computed: true, optional: true, required: false
  private _services = new PagesProjectDeploymentConfigsPreviewServicesMap(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: { [key: string]: PagesProjectDeploymentConfigsPreviewServices } | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // vectorize_bindings - computed: true, optional: true, required: false
  private _vectorizeBindings = new PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap(this, "vectorize_bindings");
  public get vectorizeBindings() {
    return this._vectorizeBindings;
  }
  public putVectorizeBindings(value: { [key: string]: PagesProjectDeploymentConfigsPreviewVectorizeBindings } | cdktf.IResolvable) {
    this._vectorizeBindings.internalValue = value;
  }
  public resetVectorizeBindings() {
    this._vectorizeBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorizeBindingsInput() {
    return this._vectorizeBindings.internalValue;
  }
}
export interface PagesProjectDeploymentConfigsProductionAiBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#project_id PagesProject#project_id}
  */
  readonly projectId?: string;
}

export function pagesProjectDeploymentConfigsProductionAiBindingsToTerraform(struct?: PagesProjectDeploymentConfigsProductionAiBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function pagesProjectDeploymentConfigsProductionAiBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionAiBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionAiBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionAiBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionAiBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}

export class PagesProjectDeploymentConfigsProductionAiBindingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionAiBindings } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionAiBindingsOutputReference {
    return new PagesProjectDeploymentConfigsProductionAiBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets {
  /**
  * Name of the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#dataset PagesProject#dataset}
  */
  readonly dataset?: string;
}

export function pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform(struct?: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset: cdktf.stringToTerraform(struct!.dataset),
  }
}


export function pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset: {
      value: cdktf.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataset = value.dataset;
    }
  }

  // dataset - computed: true, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }
}

export class PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference {
    return new PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionBrowsers {
}

export function pagesProjectDeploymentConfigsProductionBrowsersToTerraform(struct?: PagesProjectDeploymentConfigsProductionBrowsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectDeploymentConfigsProductionBrowsersToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionBrowsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectDeploymentConfigsProductionBrowsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionBrowsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionBrowsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class PagesProjectDeploymentConfigsProductionBrowsersMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionBrowsers } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionBrowsersOutputReference {
    return new PagesProjectDeploymentConfigsProductionBrowsersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionD1Databases {
  /**
  * UUID of the D1 database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#id PagesProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function pagesProjectDeploymentConfigsProductionD1DatabasesToTerraform(struct?: PagesProjectDeploymentConfigsProductionD1Databases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function pagesProjectDeploymentConfigsProductionD1DatabasesToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionD1Databases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionD1Databases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionD1Databases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

export class PagesProjectDeploymentConfigsProductionD1DatabasesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionD1Databases } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference {
    return new PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionDurableObjectNamespaces {
  /**
  * ID of the Durable Object namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#namespace_id PagesProject#namespace_id}
  */
  readonly namespaceId?: string;
}

export function pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToTerraform(struct?: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
  }
}


export function pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_id: {
      value: cdktf.stringToHclTerraform(struct!.namespaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionDurableObjectNamespaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceId = value.namespaceId;
    }
  }

  // namespace_id - computed: true, optional: true, required: false
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  public resetNamespaceId() {
    this._namespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }
}

export class PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference {
    return new PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionEnvVars {
  /**
  * Available values: "plain_text".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#type PagesProject#type}
  */
  readonly type: string;
  /**
  * Environment variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#value PagesProject#value}
  */
  readonly value: string;
}

export function pagesProjectDeploymentConfigsProductionEnvVarsToTerraform(struct?: PagesProjectDeploymentConfigsProductionEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pagesProjectDeploymentConfigsProductionEnvVarsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionEnvVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PagesProjectDeploymentConfigsProductionEnvVarsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionEnvVars } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionEnvVarsOutputReference {
    return new PagesProjectDeploymentConfigsProductionEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionHyperdriveBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#id PagesProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function pagesProjectDeploymentConfigsProductionHyperdriveBindingsToTerraform(struct?: PagesProjectDeploymentConfigsProductionHyperdriveBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function pagesProjectDeploymentConfigsProductionHyperdriveBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionHyperdriveBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionHyperdriveBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionHyperdriveBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

export class PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionHyperdriveBindings } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference {
    return new PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionKvNamespaces {
  /**
  * ID of the KV namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#namespace_id PagesProject#namespace_id}
  */
  readonly namespaceId?: string;
}

export function pagesProjectDeploymentConfigsProductionKvNamespacesToTerraform(struct?: PagesProjectDeploymentConfigsProductionKvNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
  }
}


export function pagesProjectDeploymentConfigsProductionKvNamespacesToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionKvNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_id: {
      value: cdktf.stringToHclTerraform(struct!.namespaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionKvNamespaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionKvNamespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceId = value.namespaceId;
    }
  }

  // namespace_id - computed: true, optional: true, required: false
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  public resetNamespaceId() {
    this._namespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }
}

export class PagesProjectDeploymentConfigsProductionKvNamespacesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionKvNamespaces } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference {
    return new PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionMtlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#certificate_id PagesProject#certificate_id}
  */
  readonly certificateId?: string;
}

export function pagesProjectDeploymentConfigsProductionMtlsCertificatesToTerraform(struct?: PagesProjectDeploymentConfigsProductionMtlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
  }
}


export function pagesProjectDeploymentConfigsProductionMtlsCertificatesToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionMtlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionMtlsCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionMtlsCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateId = value.certificateId;
    }
  }

  // certificate_id - computed: true, optional: true, required: false
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
}

export class PagesProjectDeploymentConfigsProductionMtlsCertificatesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionMtlsCertificates } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference {
    return new PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionPlacement {
  /**
  * Placement mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#mode PagesProject#mode}
  */
  readonly mode?: string;
}

export function pagesProjectDeploymentConfigsProductionPlacementToTerraform(struct?: PagesProjectDeploymentConfigsProductionPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function pagesProjectDeploymentConfigsProductionPlacementToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionPlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionPlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface PagesProjectDeploymentConfigsProductionQueueProducers {
  /**
  * Name of the Queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#name PagesProject#name}
  */
  readonly name?: string;
}

export function pagesProjectDeploymentConfigsProductionQueueProducersToTerraform(struct?: PagesProjectDeploymentConfigsProductionQueueProducers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function pagesProjectDeploymentConfigsProductionQueueProducersToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionQueueProducers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionQueueProducersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionQueueProducers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionQueueProducers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
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
}

export class PagesProjectDeploymentConfigsProductionQueueProducersMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionQueueProducers } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionQueueProducersOutputReference {
    return new PagesProjectDeploymentConfigsProductionQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionR2Buckets {
  /**
  * Jurisdiction of the R2 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#jurisdiction PagesProject#jurisdiction}
  */
  readonly jurisdiction?: string;
  /**
  * Name of the R2 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#name PagesProject#name}
  */
  readonly name?: string;
}

export function pagesProjectDeploymentConfigsProductionR2BucketsToTerraform(struct?: PagesProjectDeploymentConfigsProductionR2Buckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jurisdiction: cdktf.stringToTerraform(struct!.jurisdiction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function pagesProjectDeploymentConfigsProductionR2BucketsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionR2Buckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jurisdiction: {
      value: cdktf.stringToHclTerraform(struct!.jurisdiction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionR2BucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionR2Buckets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jurisdiction !== undefined) {
      hasAnyValues = true;
      internalValueResult.jurisdiction = this._jurisdiction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionR2Buckets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jurisdiction = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jurisdiction = value.jurisdiction;
      this._name = value.name;
    }
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

  // name - computed: true, optional: true, required: false
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
}

export class PagesProjectDeploymentConfigsProductionR2BucketsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionR2Buckets } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionR2BucketsOutputReference {
    return new PagesProjectDeploymentConfigsProductionR2BucketsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionServices {
  /**
  * The entrypoint to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#entrypoint PagesProject#entrypoint}
  */
  readonly entrypoint?: string;
  /**
  * The Service environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#environment PagesProject#environment}
  */
  readonly environment?: string;
  /**
  * The Service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#service PagesProject#service}
  */
  readonly service?: string;
}

export function pagesProjectDeploymentConfigsProductionServicesToTerraform(struct?: PagesProjectDeploymentConfigsProductionServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entrypoint: cdktf.stringToTerraform(struct!.entrypoint),
    environment: cdktf.stringToTerraform(struct!.environment),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function pagesProjectDeploymentConfigsProductionServicesToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entrypoint: {
      value: cdktf.stringToHclTerraform(struct!.entrypoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entrypoint = undefined;
      this._environment = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entrypoint = value.entrypoint;
      this._environment = value.environment;
      this._service = value.service;
    }
  }

  // entrypoint - computed: true, optional: true, required: false
  private _entrypoint?: string; 
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }
  public set entrypoint(value: string) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class PagesProjectDeploymentConfigsProductionServicesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionServices } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionServicesOutputReference {
    return new PagesProjectDeploymentConfigsProductionServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionVectorizeBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#index_name PagesProject#index_name}
  */
  readonly indexName?: string;
}

export function pagesProjectDeploymentConfigsProductionVectorizeBindingsToTerraform(struct?: PagesProjectDeploymentConfigsProductionVectorizeBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index_name: cdktf.stringToTerraform(struct!.indexName),
  }
}


export function pagesProjectDeploymentConfigsProductionVectorizeBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionVectorizeBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index_name: {
      value: cdktf.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionVectorizeBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionVectorizeBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexName = value.indexName;
    }
  }

  // index_name - computed: true, optional: true, required: false
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }
}

export class PagesProjectDeploymentConfigsProductionVectorizeBindingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionVectorizeBindings } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference {
    return new PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProduction {
  /**
  * Constellation bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#ai_bindings PagesProject#ai_bindings}
  */
  readonly aiBindings?: { [key: string]: PagesProjectDeploymentConfigsProductionAiBindings } | cdktf.IResolvable;
  /**
  * Analytics Engine bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#analytics_engine_datasets PagesProject#analytics_engine_datasets}
  */
  readonly analyticsEngineDatasets?: { [key: string]: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets } | cdktf.IResolvable;
  /**
  * Browser bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#browsers PagesProject#browsers}
  */
  readonly browsers?: { [key: string]: PagesProjectDeploymentConfigsProductionBrowsers } | cdktf.IResolvable;
  /**
  * Compatibility date used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#compatibility_date PagesProject#compatibility_date}
  */
  readonly compatibilityDate?: string;
  /**
  * Compatibility flags used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#compatibility_flags PagesProject#compatibility_flags}
  */
  readonly compatibilityFlags?: string[];
  /**
  * D1 databases used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#d1_databases PagesProject#d1_databases}
  */
  readonly d1Databases?: { [key: string]: PagesProjectDeploymentConfigsProductionD1Databases } | cdktf.IResolvable;
  /**
  * Durable Object namespaces used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}
  */
  readonly durableObjectNamespaces?: { [key: string]: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces } | cdktf.IResolvable;
  /**
  * Environment variables used for builds and Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#env_vars PagesProject#env_vars}
  */
  readonly envVars?: { [key: string]: PagesProjectDeploymentConfigsProductionEnvVars } | cdktf.IResolvable;
  /**
  * Hyperdrive bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#hyperdrive_bindings PagesProject#hyperdrive_bindings}
  */
  readonly hyperdriveBindings?: { [key: string]: PagesProjectDeploymentConfigsProductionHyperdriveBindings } | cdktf.IResolvable;
  /**
  * KV namespaces used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#kv_namespaces PagesProject#kv_namespaces}
  */
  readonly kvNamespaces?: { [key: string]: PagesProjectDeploymentConfigsProductionKvNamespaces } | cdktf.IResolvable;
  /**
  * mTLS bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#mtls_certificates PagesProject#mtls_certificates}
  */
  readonly mtlsCertificates?: { [key: string]: PagesProjectDeploymentConfigsProductionMtlsCertificates } | cdktf.IResolvable;
  /**
  * Placement setting used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#placement PagesProject#placement}
  */
  readonly placement?: PagesProjectDeploymentConfigsProductionPlacement;
  /**
  * Queue Producer bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#queue_producers PagesProject#queue_producers}
  */
  readonly queueProducers?: { [key: string]: PagesProjectDeploymentConfigsProductionQueueProducers } | cdktf.IResolvable;
  /**
  * R2 buckets used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#r2_buckets PagesProject#r2_buckets}
  */
  readonly r2Buckets?: { [key: string]: PagesProjectDeploymentConfigsProductionR2Buckets } | cdktf.IResolvable;
  /**
  * Services used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#services PagesProject#services}
  */
  readonly services?: { [key: string]: PagesProjectDeploymentConfigsProductionServices } | cdktf.IResolvable;
  /**
  * Vectorize bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#vectorize_bindings PagesProject#vectorize_bindings}
  */
  readonly vectorizeBindings?: { [key: string]: PagesProjectDeploymentConfigsProductionVectorizeBindings } | cdktf.IResolvable;
}

export function pagesProjectDeploymentConfigsProductionToTerraform(struct?: PagesProjectDeploymentConfigsProduction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionAiBindingsToTerraform)(struct!.aiBindings),
    analytics_engine_datasets: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform)(struct!.analyticsEngineDatasets),
    browsers: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionBrowsersToTerraform)(struct!.browsers),
    compatibility_date: cdktf.stringToTerraform(struct!.compatibilityDate),
    compatibility_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.compatibilityFlags),
    d1_databases: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionD1DatabasesToTerraform)(struct!.d1Databases),
    durable_object_namespaces: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToTerraform)(struct!.durableObjectNamespaces),
    env_vars: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionEnvVarsToTerraform)(struct!.envVars),
    hyperdrive_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionHyperdriveBindingsToTerraform)(struct!.hyperdriveBindings),
    kv_namespaces: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionKvNamespacesToTerraform)(struct!.kvNamespaces),
    mtls_certificates: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionMtlsCertificatesToTerraform)(struct!.mtlsCertificates),
    placement: pagesProjectDeploymentConfigsProductionPlacementToTerraform(struct!.placement),
    queue_producers: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionQueueProducersToTerraform)(struct!.queueProducers),
    r2_buckets: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionR2BucketsToTerraform)(struct!.r2Buckets),
    services: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionServicesToTerraform)(struct!.services),
    vectorize_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionVectorizeBindingsToTerraform)(struct!.vectorizeBindings),
  }
}


export function pagesProjectDeploymentConfigsProductionToHclTerraform(struct?: PagesProjectDeploymentConfigsProduction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai_bindings: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionAiBindingsToHclTerraform)(struct!.aiBindings),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionAiBindingsMap",
    },
    analytics_engine_datasets: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform)(struct!.analyticsEngineDatasets),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap",
    },
    browsers: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionBrowsersToHclTerraform)(struct!.browsers),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionBrowsersMap",
    },
    compatibility_date: {
      value: cdktf.stringToHclTerraform(struct!.compatibilityDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compatibility_flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.compatibilityFlags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    d1_databases: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionD1DatabasesToHclTerraform)(struct!.d1Databases),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionD1DatabasesMap",
    },
    durable_object_namespaces: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform)(struct!.durableObjectNamespaces),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap",
    },
    env_vars: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionEnvVarsToHclTerraform)(struct!.envVars),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionEnvVarsMap",
    },
    hyperdrive_bindings: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionHyperdriveBindingsToHclTerraform)(struct!.hyperdriveBindings),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap",
    },
    kv_namespaces: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionKvNamespacesToHclTerraform)(struct!.kvNamespaces),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionKvNamespacesMap",
    },
    mtls_certificates: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionMtlsCertificatesToHclTerraform)(struct!.mtlsCertificates),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionMtlsCertificatesMap",
    },
    placement: {
      value: pagesProjectDeploymentConfigsProductionPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "struct",
      storageClassType: "PagesProjectDeploymentConfigsProductionPlacement",
    },
    queue_producers: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionQueueProducersToHclTerraform)(struct!.queueProducers),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionQueueProducersMap",
    },
    r2_buckets: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionR2BucketsToHclTerraform)(struct!.r2Buckets),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionR2BucketsMap",
    },
    services: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionServicesToHclTerraform)(struct!.services),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionServicesMap",
    },
    vectorize_bindings: {
      value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionVectorizeBindingsToHclTerraform)(struct!.vectorizeBindings),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionVectorizeBindingsMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProduction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiBindings = this._aiBindings?.internalValue;
    }
    if (this._analyticsEngineDatasets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyticsEngineDatasets = this._analyticsEngineDatasets?.internalValue;
    }
    if (this._browsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.browsers = this._browsers?.internalValue;
    }
    if (this._compatibilityDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibilityDate = this._compatibilityDate;
    }
    if (this._compatibilityFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibilityFlags = this._compatibilityFlags;
    }
    if (this._d1Databases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.d1Databases = this._d1Databases?.internalValue;
    }
    if (this._durableObjectNamespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.durableObjectNamespaces = this._durableObjectNamespaces?.internalValue;
    }
    if (this._envVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVars = this._envVars?.internalValue;
    }
    if (this._hyperdriveBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperdriveBindings = this._hyperdriveBindings?.internalValue;
    }
    if (this._kvNamespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kvNamespaces = this._kvNamespaces?.internalValue;
    }
    if (this._mtlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsCertificates = this._mtlsCertificates?.internalValue;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._queueProducers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueProducers = this._queueProducers?.internalValue;
    }
    if (this._r2Buckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.r2Buckets = this._r2Buckets?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._vectorizeBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorizeBindings = this._vectorizeBindings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProduction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aiBindings.internalValue = undefined;
      this._analyticsEngineDatasets.internalValue = undefined;
      this._browsers.internalValue = undefined;
      this._compatibilityDate = undefined;
      this._compatibilityFlags = undefined;
      this._d1Databases.internalValue = undefined;
      this._durableObjectNamespaces.internalValue = undefined;
      this._envVars.internalValue = undefined;
      this._hyperdriveBindings.internalValue = undefined;
      this._kvNamespaces.internalValue = undefined;
      this._mtlsCertificates.internalValue = undefined;
      this._placement.internalValue = undefined;
      this._queueProducers.internalValue = undefined;
      this._r2Buckets.internalValue = undefined;
      this._services.internalValue = undefined;
      this._vectorizeBindings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aiBindings.internalValue = value.aiBindings;
      this._analyticsEngineDatasets.internalValue = value.analyticsEngineDatasets;
      this._browsers.internalValue = value.browsers;
      this._compatibilityDate = value.compatibilityDate;
      this._compatibilityFlags = value.compatibilityFlags;
      this._d1Databases.internalValue = value.d1Databases;
      this._durableObjectNamespaces.internalValue = value.durableObjectNamespaces;
      this._envVars.internalValue = value.envVars;
      this._hyperdriveBindings.internalValue = value.hyperdriveBindings;
      this._kvNamespaces.internalValue = value.kvNamespaces;
      this._mtlsCertificates.internalValue = value.mtlsCertificates;
      this._placement.internalValue = value.placement;
      this._queueProducers.internalValue = value.queueProducers;
      this._r2Buckets.internalValue = value.r2Buckets;
      this._services.internalValue = value.services;
      this._vectorizeBindings.internalValue = value.vectorizeBindings;
    }
  }

  // ai_bindings - computed: true, optional: true, required: false
  private _aiBindings = new PagesProjectDeploymentConfigsProductionAiBindingsMap(this, "ai_bindings");
  public get aiBindings() {
    return this._aiBindings;
  }
  public putAiBindings(value: { [key: string]: PagesProjectDeploymentConfigsProductionAiBindings } | cdktf.IResolvable) {
    this._aiBindings.internalValue = value;
  }
  public resetAiBindings() {
    this._aiBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiBindingsInput() {
    return this._aiBindings.internalValue;
  }

  // analytics_engine_datasets - computed: true, optional: true, required: false
  private _analyticsEngineDatasets = new PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap(this, "analytics_engine_datasets");
  public get analyticsEngineDatasets() {
    return this._analyticsEngineDatasets;
  }
  public putAnalyticsEngineDatasets(value: { [key: string]: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets } | cdktf.IResolvable) {
    this._analyticsEngineDatasets.internalValue = value;
  }
  public resetAnalyticsEngineDatasets() {
    this._analyticsEngineDatasets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsEngineDatasetsInput() {
    return this._analyticsEngineDatasets.internalValue;
  }

  // browsers - computed: true, optional: true, required: false
  private _browsers = new PagesProjectDeploymentConfigsProductionBrowsersMap(this, "browsers");
  public get browsers() {
    return this._browsers;
  }
  public putBrowsers(value: { [key: string]: PagesProjectDeploymentConfigsProductionBrowsers } | cdktf.IResolvable) {
    this._browsers.internalValue = value;
  }
  public resetBrowsers() {
    this._browsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browsersInput() {
    return this._browsers.internalValue;
  }

  // compatibility_date - computed: true, optional: true, required: false
  private _compatibilityDate?: string; 
  public get compatibilityDate() {
    return this.getStringAttribute('compatibility_date');
  }
  public set compatibilityDate(value: string) {
    this._compatibilityDate = value;
  }
  public resetCompatibilityDate() {
    this._compatibilityDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityDateInput() {
    return this._compatibilityDate;
  }

  // compatibility_flags - computed: true, optional: true, required: false
  private _compatibilityFlags?: string[]; 
  public get compatibilityFlags() {
    return this.getListAttribute('compatibility_flags');
  }
  public set compatibilityFlags(value: string[]) {
    this._compatibilityFlags = value;
  }
  public resetCompatibilityFlags() {
    this._compatibilityFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityFlagsInput() {
    return this._compatibilityFlags;
  }

  // d1_databases - computed: true, optional: true, required: false
  private _d1Databases = new PagesProjectDeploymentConfigsProductionD1DatabasesMap(this, "d1_databases");
  public get d1Databases() {
    return this._d1Databases;
  }
  public putD1Databases(value: { [key: string]: PagesProjectDeploymentConfigsProductionD1Databases } | cdktf.IResolvable) {
    this._d1Databases.internalValue = value;
  }
  public resetD1Databases() {
    this._d1Databases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get d1DatabasesInput() {
    return this._d1Databases.internalValue;
  }

  // durable_object_namespaces - computed: true, optional: true, required: false
  private _durableObjectNamespaces = new PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap(this, "durable_object_namespaces");
  public get durableObjectNamespaces() {
    return this._durableObjectNamespaces;
  }
  public putDurableObjectNamespaces(value: { [key: string]: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces } | cdktf.IResolvable) {
    this._durableObjectNamespaces.internalValue = value;
  }
  public resetDurableObjectNamespaces() {
    this._durableObjectNamespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durableObjectNamespacesInput() {
    return this._durableObjectNamespaces.internalValue;
  }

  // env_vars - computed: true, optional: true, required: false
  private _envVars = new PagesProjectDeploymentConfigsProductionEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: { [key: string]: PagesProjectDeploymentConfigsProductionEnvVars } | cdktf.IResolvable) {
    this._envVars.internalValue = value;
  }
  public resetEnvVars() {
    this._envVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars.internalValue;
  }

  // hyperdrive_bindings - computed: true, optional: true, required: false
  private _hyperdriveBindings = new PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap(this, "hyperdrive_bindings");
  public get hyperdriveBindings() {
    return this._hyperdriveBindings;
  }
  public putHyperdriveBindings(value: { [key: string]: PagesProjectDeploymentConfigsProductionHyperdriveBindings } | cdktf.IResolvable) {
    this._hyperdriveBindings.internalValue = value;
  }
  public resetHyperdriveBindings() {
    this._hyperdriveBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperdriveBindingsInput() {
    return this._hyperdriveBindings.internalValue;
  }

  // kv_namespaces - computed: true, optional: true, required: false
  private _kvNamespaces = new PagesProjectDeploymentConfigsProductionKvNamespacesMap(this, "kv_namespaces");
  public get kvNamespaces() {
    return this._kvNamespaces;
  }
  public putKvNamespaces(value: { [key: string]: PagesProjectDeploymentConfigsProductionKvNamespaces } | cdktf.IResolvable) {
    this._kvNamespaces.internalValue = value;
  }
  public resetKvNamespaces() {
    this._kvNamespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvNamespacesInput() {
    return this._kvNamespaces.internalValue;
  }

  // mtls_certificates - computed: true, optional: true, required: false
  private _mtlsCertificates = new PagesProjectDeploymentConfigsProductionMtlsCertificatesMap(this, "mtls_certificates");
  public get mtlsCertificates() {
    return this._mtlsCertificates;
  }
  public putMtlsCertificates(value: { [key: string]: PagesProjectDeploymentConfigsProductionMtlsCertificates } | cdktf.IResolvable) {
    this._mtlsCertificates.internalValue = value;
  }
  public resetMtlsCertificates() {
    this._mtlsCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsCertificatesInput() {
    return this._mtlsCertificates.internalValue;
  }

  // placement - computed: true, optional: true, required: false
  private _placement = new PagesProjectDeploymentConfigsProductionPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: PagesProjectDeploymentConfigsProductionPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // queue_producers - computed: true, optional: true, required: false
  private _queueProducers = new PagesProjectDeploymentConfigsProductionQueueProducersMap(this, "queue_producers");
  public get queueProducers() {
    return this._queueProducers;
  }
  public putQueueProducers(value: { [key: string]: PagesProjectDeploymentConfigsProductionQueueProducers } | cdktf.IResolvable) {
    this._queueProducers.internalValue = value;
  }
  public resetQueueProducers() {
    this._queueProducers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueProducersInput() {
    return this._queueProducers.internalValue;
  }

  // r2_buckets - computed: true, optional: true, required: false
  private _r2Buckets = new PagesProjectDeploymentConfigsProductionR2BucketsMap(this, "r2_buckets");
  public get r2Buckets() {
    return this._r2Buckets;
  }
  public putR2Buckets(value: { [key: string]: PagesProjectDeploymentConfigsProductionR2Buckets } | cdktf.IResolvable) {
    this._r2Buckets.internalValue = value;
  }
  public resetR2Buckets() {
    this._r2Buckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get r2BucketsInput() {
    return this._r2Buckets.internalValue;
  }

  // services - computed: true, optional: true, required: false
  private _services = new PagesProjectDeploymentConfigsProductionServicesMap(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: { [key: string]: PagesProjectDeploymentConfigsProductionServices } | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // vectorize_bindings - computed: true, optional: true, required: false
  private _vectorizeBindings = new PagesProjectDeploymentConfigsProductionVectorizeBindingsMap(this, "vectorize_bindings");
  public get vectorizeBindings() {
    return this._vectorizeBindings;
  }
  public putVectorizeBindings(value: { [key: string]: PagesProjectDeploymentConfigsProductionVectorizeBindings } | cdktf.IResolvable) {
    this._vectorizeBindings.internalValue = value;
  }
  public resetVectorizeBindings() {
    this._vectorizeBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorizeBindingsInput() {
    return this._vectorizeBindings.internalValue;
  }
}
export interface PagesProjectDeploymentConfigs {
  /**
  * Configs for preview deploys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#preview PagesProject#preview}
  */
  readonly preview?: PagesProjectDeploymentConfigsPreview;
  /**
  * Configs for production deploys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#production PagesProject#production}
  */
  readonly production?: PagesProjectDeploymentConfigsProduction;
}

export function pagesProjectDeploymentConfigsToTerraform(struct?: PagesProjectDeploymentConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preview: pagesProjectDeploymentConfigsPreviewToTerraform(struct!.preview),
    production: pagesProjectDeploymentConfigsProductionToTerraform(struct!.production),
  }
}


export function pagesProjectDeploymentConfigsToHclTerraform(struct?: PagesProjectDeploymentConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preview: {
      value: pagesProjectDeploymentConfigsPreviewToHclTerraform(struct!.preview),
      isBlock: true,
      type: "struct",
      storageClassType: "PagesProjectDeploymentConfigsPreview",
    },
    production: {
      value: pagesProjectDeploymentConfigsProductionToHclTerraform(struct!.production),
      isBlock: true,
      type: "struct",
      storageClassType: "PagesProjectDeploymentConfigsProduction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectDeploymentConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preview?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preview = this._preview?.internalValue;
    }
    if (this._production?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.production = this._production?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preview.internalValue = undefined;
      this._production.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preview.internalValue = value.preview;
      this._production.internalValue = value.production;
    }
  }

  // preview - computed: true, optional: true, required: false
  private _preview = new PagesProjectDeploymentConfigsPreviewOutputReference(this, "preview");
  public get preview() {
    return this._preview;
  }
  public putPreview(value: PagesProjectDeploymentConfigsPreview) {
    this._preview.internalValue = value;
  }
  public resetPreview() {
    this._preview.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewInput() {
    return this._preview.internalValue;
  }

  // production - computed: true, optional: true, required: false
  private _production = new PagesProjectDeploymentConfigsProductionOutputReference(this, "production");
  public get production() {
    return this._production;
  }
  public putProduction(value: PagesProjectDeploymentConfigsProduction) {
    this._production.internalValue = value;
  }
  public resetProduction() {
    this._production.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productionInput() {
    return this._production.internalValue;
  }
}
export interface PagesProjectLatestDeploymentBuildConfig {
}

export function pagesProjectLatestDeploymentBuildConfigToTerraform(struct?: PagesProjectLatestDeploymentBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentBuildConfigToHclTerraform(struct?: PagesProjectLatestDeploymentBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentBuildConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectLatestDeploymentBuildConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeploymentBuildConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build_caching - computed: true, optional: false, required: false
  public get buildCaching() {
    return this.getBooleanAttribute('build_caching');
  }

  // build_command - computed: true, optional: false, required: false
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }

  // destination_dir - computed: true, optional: false, required: false
  public get destinationDir() {
    return this.getStringAttribute('destination_dir');
  }

  // root_dir - computed: true, optional: false, required: false
  public get rootDir() {
    return this.getStringAttribute('root_dir');
  }

  // web_analytics_tag - computed: true, optional: false, required: false
  public get webAnalyticsTag() {
    return this.getStringAttribute('web_analytics_tag');
  }

  // web_analytics_token - computed: true, optional: false, required: false
  public get webAnalyticsToken() {
    return this.getStringAttribute('web_analytics_token');
  }
}
export interface PagesProjectLatestDeploymentDeploymentTriggerMetadata {
}

export function pagesProjectLatestDeploymentDeploymentTriggerMetadataToTerraform(struct?: PagesProjectLatestDeploymentDeploymentTriggerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentDeploymentTriggerMetadataToHclTerraform(struct?: PagesProjectLatestDeploymentDeploymentTriggerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectLatestDeploymentDeploymentTriggerMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeploymentDeploymentTriggerMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // commit_hash - computed: true, optional: false, required: false
  public get commitHash() {
    return this.getStringAttribute('commit_hash');
  }

  // commit_message - computed: true, optional: false, required: false
  public get commitMessage() {
    return this.getStringAttribute('commit_message');
  }
}
export interface PagesProjectLatestDeploymentDeploymentTrigger {
}

export function pagesProjectLatestDeploymentDeploymentTriggerToTerraform(struct?: PagesProjectLatestDeploymentDeploymentTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentDeploymentTriggerToHclTerraform(struct?: PagesProjectLatestDeploymentDeploymentTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentDeploymentTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectLatestDeploymentDeploymentTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeploymentDeploymentTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface PagesProjectLatestDeploymentEnvVars {
}

export function pagesProjectLatestDeploymentEnvVarsToTerraform(struct?: PagesProjectLatestDeploymentEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentEnvVarsToHclTerraform(struct?: PagesProjectLatestDeploymentEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectLatestDeploymentEnvVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeploymentEnvVars | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class PagesProjectLatestDeploymentEnvVarsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectLatestDeploymentEnvVarsOutputReference {
    return new PagesProjectLatestDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectLatestDeploymentLatestStage {
}

export function pagesProjectLatestDeploymentLatestStageToTerraform(struct?: PagesProjectLatestDeploymentLatestStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentLatestStageToHclTerraform(struct?: PagesProjectLatestDeploymentLatestStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentLatestStageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectLatestDeploymentLatestStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeploymentLatestStage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ended_on - computed: true, optional: false, required: false
  public get endedOn() {
    return this.getStringAttribute('ended_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // started_on - computed: true, optional: false, required: false
  public get startedOn() {
    return this.getStringAttribute('started_on');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface PagesProjectLatestDeploymentSourceConfig {
}

export function pagesProjectLatestDeploymentSourceConfigToTerraform(struct?: PagesProjectLatestDeploymentSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentSourceConfigToHclTerraform(struct?: PagesProjectLatestDeploymentSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectLatestDeploymentSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeploymentSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployments_enabled - computed: true, optional: false, required: false
  public get deploymentsEnabled() {
    return this.getBooleanAttribute('deployments_enabled');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // path_excludes - computed: true, optional: false, required: false
  public get pathExcludes() {
    return this.getListAttribute('path_excludes');
  }

  // path_includes - computed: true, optional: false, required: false
  public get pathIncludes() {
    return this.getListAttribute('path_includes');
  }

  // pr_comments_enabled - computed: true, optional: false, required: false
  public get prCommentsEnabled() {
    return this.getBooleanAttribute('pr_comments_enabled');
  }

  // preview_branch_excludes - computed: true, optional: false, required: false
  public get previewBranchExcludes() {
    return this.getListAttribute('preview_branch_excludes');
  }

  // preview_branch_includes - computed: true, optional: false, required: false
  public get previewBranchIncludes() {
    return this.getListAttribute('preview_branch_includes');
  }

  // preview_deployment_setting - computed: true, optional: false, required: false
  public get previewDeploymentSetting() {
    return this.getStringAttribute('preview_deployment_setting');
  }

  // production_branch - computed: true, optional: false, required: false
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }

  // production_deployments_enabled - computed: true, optional: false, required: false
  public get productionDeploymentsEnabled() {
    return this.getBooleanAttribute('production_deployments_enabled');
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
}
export interface PagesProjectLatestDeploymentSource {
}

export function pagesProjectLatestDeploymentSourceToTerraform(struct?: PagesProjectLatestDeploymentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentSourceToHclTerraform(struct?: PagesProjectLatestDeploymentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectLatestDeploymentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeploymentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new PagesProjectLatestDeploymentSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface PagesProjectLatestDeploymentStages {
}

export function pagesProjectLatestDeploymentStagesToTerraform(struct?: PagesProjectLatestDeploymentStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentStagesToHclTerraform(struct?: PagesProjectLatestDeploymentStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentStagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PagesProjectLatestDeploymentStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeploymentStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ended_on - computed: true, optional: false, required: false
  public get endedOn() {
    return this.getStringAttribute('ended_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // started_on - computed: true, optional: false, required: false
  public get startedOn() {
    return this.getStringAttribute('started_on');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class PagesProjectLatestDeploymentStagesList extends cdktf.ComplexList {

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
  public get(index: number): PagesProjectLatestDeploymentStagesOutputReference {
    return new PagesProjectLatestDeploymentStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PagesProjectLatestDeployment {
}

export function pagesProjectLatestDeploymentToTerraform(struct?: PagesProjectLatestDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentToHclTerraform(struct?: PagesProjectLatestDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectLatestDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // build_config - computed: true, optional: false, required: false
  private _buildConfig = new PagesProjectLatestDeploymentBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // deployment_trigger - computed: true, optional: false, required: false
  private _deploymentTrigger = new PagesProjectLatestDeploymentDeploymentTriggerOutputReference(this, "deployment_trigger");
  public get deploymentTrigger() {
    return this._deploymentTrigger;
  }

  // env_vars - computed: true, optional: false, required: false
  private _envVars = new PagesProjectLatestDeploymentEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_skipped - computed: true, optional: false, required: false
  public get isSkipped() {
    return this.getBooleanAttribute('is_skipped');
  }

  // latest_stage - computed: true, optional: false, required: false
  private _latestStage = new PagesProjectLatestDeploymentLatestStageOutputReference(this, "latest_stage");
  public get latestStage() {
    return this._latestStage;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // short_id - computed: true, optional: false, required: false
  public get shortId() {
    return this.getStringAttribute('short_id');
  }

  // source - computed: true, optional: false, required: false
  private _source = new PagesProjectLatestDeploymentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // stages - computed: true, optional: false, required: false
  private _stages = new PagesProjectLatestDeploymentStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface PagesProjectSourceConfig {
}

export function pagesProjectSourceConfigToTerraform(struct?: PagesProjectSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectSourceConfigToHclTerraform(struct?: PagesProjectSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployments_enabled - computed: true, optional: false, required: false
  public get deploymentsEnabled() {
    return this.getBooleanAttribute('deployments_enabled');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // path_excludes - computed: true, optional: false, required: false
  public get pathExcludes() {
    return this.getListAttribute('path_excludes');
  }

  // path_includes - computed: true, optional: false, required: false
  public get pathIncludes() {
    return this.getListAttribute('path_includes');
  }

  // pr_comments_enabled - computed: true, optional: false, required: false
  public get prCommentsEnabled() {
    return this.getBooleanAttribute('pr_comments_enabled');
  }

  // preview_branch_excludes - computed: true, optional: false, required: false
  public get previewBranchExcludes() {
    return this.getListAttribute('preview_branch_excludes');
  }

  // preview_branch_includes - computed: true, optional: false, required: false
  public get previewBranchIncludes() {
    return this.getListAttribute('preview_branch_includes');
  }

  // preview_deployment_setting - computed: true, optional: false, required: false
  public get previewDeploymentSetting() {
    return this.getStringAttribute('preview_deployment_setting');
  }

  // production_branch - computed: true, optional: false, required: false
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }

  // production_deployments_enabled - computed: true, optional: false, required: false
  public get productionDeploymentsEnabled() {
    return this.getBooleanAttribute('production_deployments_enabled');
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
}
export interface PagesProjectSource {
}

export function pagesProjectSourceToTerraform(struct?: PagesProjectSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectSourceToHclTerraform(struct?: PagesProjectSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new PagesProjectSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project cloudflare_pages_project}
*/
export class PagesProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_pages_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PagesProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PagesProject to import
  * @param importFromId The id of the existing PagesProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PagesProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pages_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/pages_project cloudflare_pages_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PagesProjectConfig
  */
  public constructor(scope: Construct, id: string, config: PagesProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_pages_project',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.3.0',
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
    this._buildConfig.internalValue = config.buildConfig;
    this._deploymentConfigs.internalValue = config.deploymentConfigs;
    this._name = config.name;
    this._productionBranch = config.productionBranch;
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

  // build_config - computed: true, optional: true, required: false
  private _buildConfig = new PagesProjectBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }
  public putBuildConfig(value: PagesProjectBuildConfig) {
    this._buildConfig.internalValue = value;
  }
  public resetBuildConfig() {
    this._buildConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildConfigInput() {
    return this._buildConfig.internalValue;
  }

  // canonical_deployment - computed: true, optional: false, required: false
  private _canonicalDeployment = new PagesProjectCanonicalDeploymentOutputReference(this, "canonical_deployment");
  public get canonicalDeployment() {
    return this._canonicalDeployment;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // deployment_configs - computed: true, optional: true, required: false
  private _deploymentConfigs = new PagesProjectDeploymentConfigsOutputReference(this, "deployment_configs");
  public get deploymentConfigs() {
    return this._deploymentConfigs;
  }
  public putDeploymentConfigs(value: PagesProjectDeploymentConfigs) {
    this._deploymentConfigs.internalValue = value;
  }
  public resetDeploymentConfigs() {
    this._deploymentConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigsInput() {
    return this._deploymentConfigs.internalValue;
  }

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return this.getListAttribute('domains');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latest_deployment - computed: true, optional: false, required: false
  private _latestDeployment = new PagesProjectLatestDeploymentOutputReference(this, "latest_deployment");
  public get latestDeployment() {
    return this._latestDeployment;
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

  // production_branch - computed: false, optional: true, required: false
  private _productionBranch?: string; 
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }
  public set productionBranch(value: string) {
    this._productionBranch = value;
  }
  public resetProductionBranch() {
    this._productionBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productionBranchInput() {
    return this._productionBranch;
  }

  // source - computed: true, optional: false, required: false
  private _source = new PagesProjectSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      build_config: pagesProjectBuildConfigToTerraform(this._buildConfig.internalValue),
      deployment_configs: pagesProjectDeploymentConfigsToTerraform(this._deploymentConfigs.internalValue),
      name: cdktf.stringToTerraform(this._name),
      production_branch: cdktf.stringToTerraform(this._productionBranch),
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
      build_config: {
        value: pagesProjectBuildConfigToHclTerraform(this._buildConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PagesProjectBuildConfig",
      },
      deployment_configs: {
        value: pagesProjectDeploymentConfigsToHclTerraform(this._deploymentConfigs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PagesProjectDeploymentConfigs",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      production_branch: {
        value: cdktf.stringToHclTerraform(this._productionBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
