# `cloudflare_pages_project`

Refer to the Terraform Registory for docs: [`cloudflare_pages_project`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project).

# `pagesProject` Submodule <a name="`pagesProject` Submodule" id="@cdktf/provider-cloudflare.pagesProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PagesProject <a name="PagesProject" id="@cdktf/provider-cloudflare.pagesProject.PagesProject"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project cloudflare_pages_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProject(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  name: str,
  production_branch: str,
  build_config: PagesProjectBuildConfig = None,
  deployment_configs: PagesProjectDeploymentConfigs = None,
  id: str = None,
  source: PagesProjectSource = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the project. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.productionBranch">production_branch</a></code> | <code>str</code> | The name of the branch that is used for the production environment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.buildConfig">build_config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | build_config block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.deploymentConfigs">deployment_configs</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | deployment_configs block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#id PagesProject#id}. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | source block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#account_id PagesProject#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.name"></a>

- *Type:* str

Name of the project. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#name PagesProject#name}

---

##### `production_branch`<sup>Required</sup> <a name="production_branch" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.productionBranch"></a>

- *Type:* str

The name of the branch that is used for the production environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#production_branch PagesProject#production_branch}

---

##### `build_config`<sup>Optional</sup> <a name="build_config" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.buildConfig"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

build_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#build_config PagesProject#build_config}

---

##### `deployment_configs`<sup>Optional</sup> <a name="deployment_configs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.deploymentConfigs"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

deployment_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#deployment_configs PagesProject#deployment_configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#id PagesProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#source PagesProject#source}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig">put_build_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.putDeploymentConfigs">put_deployment_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetBuildConfig">reset_build_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetDeploymentConfigs">reset_deployment_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetSource">reset_source</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_build_config` <a name="put_build_config" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig"></a>

```python
def put_build_config(
  build_command: str = None,
  destination_dir: str = None,
  root_dir: str = None,
  web_analytics_tag: str = None,
  web_analytics_token: str = None
) -> None
```

###### `build_command`<sup>Optional</sup> <a name="build_command" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig.parameter.buildCommand"></a>

- *Type:* str

Command used to build project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#build_command PagesProject#build_command}

---

###### `destination_dir`<sup>Optional</sup> <a name="destination_dir" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig.parameter.destinationDir"></a>

- *Type:* str

Output directory of the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#destination_dir PagesProject#destination_dir}

---

###### `root_dir`<sup>Optional</sup> <a name="root_dir" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig.parameter.rootDir"></a>

- *Type:* str

Your project's root directory, where Cloudflare runs the build command.

If your site is not in a subdirectory, leave this path value empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#root_dir PagesProject#root_dir}

---

###### `web_analytics_tag`<sup>Optional</sup> <a name="web_analytics_tag" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig.parameter.webAnalyticsTag"></a>

- *Type:* str

The classifying tag for analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#web_analytics_tag PagesProject#web_analytics_tag}

---

###### `web_analytics_token`<sup>Optional</sup> <a name="web_analytics_token" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig.parameter.webAnalyticsToken"></a>

- *Type:* str

The auth token for analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#web_analytics_token PagesProject#web_analytics_token}

---

##### `put_deployment_configs` <a name="put_deployment_configs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putDeploymentConfigs"></a>

```python
def put_deployment_configs(
  preview: PagesProjectDeploymentConfigsPreview,
  production: PagesProjectDeploymentConfigsProduction
) -> None
```

###### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putDeploymentConfigs.parameter.preview"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

preview block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#preview PagesProject#preview}

---

###### `production`<sup>Required</sup> <a name="production" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putDeploymentConfigs.parameter.production"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

production block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#production PagesProject#production}

---

##### `put_source` <a name="put_source" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putSource"></a>

```python
def put_source(
  config: PagesProjectSourceConfig = None,
  type: str = None
) -> None
```

###### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putSource.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#config PagesProject#config}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putSource.parameter.type"></a>

- *Type:* str

Project host type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#type PagesProject#type}

---

##### `reset_build_config` <a name="reset_build_config" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetBuildConfig"></a>

```python
def reset_build_config() -> None
```

##### `reset_deployment_configs` <a name="reset_deployment_configs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetDeploymentConfigs"></a>

```python
def reset_deployment_configs() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetSource"></a>

```python
def reset_source() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProject.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfig">build_config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference">PagesProjectBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigs">deployment_configs</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference">PagesProjectDeploymentConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference">PagesProjectSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.subdomain">subdomain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfigInput">build_config_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigsInput">deployment_configs_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranchInput">production_branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranch">production_branch</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `build_config`<sup>Required</sup> <a name="build_config" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfig"></a>

```python
build_config: PagesProjectBuildConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference">PagesProjectBuildConfigOutputReference</a>

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `deployment_configs`<sup>Required</sup> <a name="deployment_configs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigs"></a>

```python
deployment_configs: PagesProjectDeploymentConfigsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference">PagesProjectDeploymentConfigsOutputReference</a>

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.source"></a>

```python
source: PagesProjectSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference">PagesProjectSourceOutputReference</a>

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.subdomain"></a>

```python
subdomain: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `build_config_input`<sup>Optional</sup> <a name="build_config_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfigInput"></a>

```python
build_config_input: PagesProjectBuildConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

---

##### `deployment_configs_input`<sup>Optional</sup> <a name="deployment_configs_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigsInput"></a>

```python
deployment_configs_input: PagesProjectDeploymentConfigs
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `production_branch_input`<sup>Optional</sup> <a name="production_branch_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranchInput"></a>

```python
production_branch_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.sourceInput"></a>

```python
source_input: PagesProjectSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `production_branch`<sup>Required</sup> <a name="production_branch" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranch"></a>

```python
production_branch: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PagesProjectBuildConfig <a name="PagesProjectBuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectBuildConfig(
  build_command: str = None,
  destination_dir: str = None,
  root_dir: str = None,
  web_analytics_tag: str = None,
  web_analytics_token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.buildCommand">build_command</a></code> | <code>str</code> | Command used to build project. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.destinationDir">destination_dir</a></code> | <code>str</code> | Output directory of the build. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.rootDir">root_dir</a></code> | <code>str</code> | Your project's root directory, where Cloudflare runs the build command. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsTag">web_analytics_tag</a></code> | <code>str</code> | The classifying tag for analytics. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsToken">web_analytics_token</a></code> | <code>str</code> | The auth token for analytics. |

---

##### `build_command`<sup>Optional</sup> <a name="build_command" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.buildCommand"></a>

```python
build_command: str
```

- *Type:* str

Command used to build project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#build_command PagesProject#build_command}

---

##### `destination_dir`<sup>Optional</sup> <a name="destination_dir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.destinationDir"></a>

```python
destination_dir: str
```

- *Type:* str

Output directory of the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#destination_dir PagesProject#destination_dir}

---

##### `root_dir`<sup>Optional</sup> <a name="root_dir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.rootDir"></a>

```python
root_dir: str
```

- *Type:* str

Your project's root directory, where Cloudflare runs the build command.

If your site is not in a subdirectory, leave this path value empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#root_dir PagesProject#root_dir}

---

##### `web_analytics_tag`<sup>Optional</sup> <a name="web_analytics_tag" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsTag"></a>

```python
web_analytics_tag: str
```

- *Type:* str

The classifying tag for analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#web_analytics_tag PagesProject#web_analytics_tag}

---

##### `web_analytics_token`<sup>Optional</sup> <a name="web_analytics_token" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsToken"></a>

```python
web_analytics_token: str
```

- *Type:* str

The auth token for analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#web_analytics_token PagesProject#web_analytics_token}

---

### PagesProjectConfig <a name="PagesProjectConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  name: str,
  production_branch: str,
  build_config: PagesProjectBuildConfig = None,
  deployment_configs: PagesProjectDeploymentConfigs = None,
  id: str = None,
  source: PagesProjectSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.name">name</a></code> | <code>str</code> | Name of the project. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.productionBranch">production_branch</a></code> | <code>str</code> | The name of the branch that is used for the production environment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.buildConfig">build_config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | build_config block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.deploymentConfigs">deployment_configs</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | deployment_configs block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#id PagesProject#id}. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | source block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#account_id PagesProject#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the project. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#name PagesProject#name}

---

##### `production_branch`<sup>Required</sup> <a name="production_branch" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.productionBranch"></a>

```python
production_branch: str
```

- *Type:* str

The name of the branch that is used for the production environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#production_branch PagesProject#production_branch}

---

##### `build_config`<sup>Optional</sup> <a name="build_config" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.buildConfig"></a>

```python
build_config: PagesProjectBuildConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

build_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#build_config PagesProject#build_config}

---

##### `deployment_configs`<sup>Optional</sup> <a name="deployment_configs" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.deploymentConfigs"></a>

```python
deployment_configs: PagesProjectDeploymentConfigs
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

deployment_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#deployment_configs PagesProject#deployment_configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#id PagesProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.source"></a>

```python
source: PagesProjectSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#source PagesProject#source}

---

### PagesProjectDeploymentConfigs <a name="PagesProjectDeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectDeploymentConfigs(
  preview: PagesProjectDeploymentConfigsPreview,
  production: PagesProjectDeploymentConfigsProduction
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.preview">preview</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a></code> | preview block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.production">production</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a></code> | production block. |

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.preview"></a>

```python
preview: PagesProjectDeploymentConfigsPreview
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

preview block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#preview PagesProject#preview}

---

##### `production`<sup>Required</sup> <a name="production" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.production"></a>

```python
production: PagesProjectDeploymentConfigsProduction
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

production block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#production PagesProject#production}

---

### PagesProjectDeploymentConfigsPreview <a name="PagesProjectDeploymentConfigsPreview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectDeploymentConfigsPreview(
  always_use_latest_compatibility_date: typing.Union[bool, IResolvable] = None,
  compatibility_date: str = None,
  compatibility_flags: typing.List[str] = None,
  d1_databases: typing.Mapping[str] = None,
  durable_object_namespaces: typing.Mapping[str] = None,
  environment_variables: typing.Mapping[str] = None,
  fail_open: typing.Union[bool, IResolvable] = None,
  kv_namespaces: typing.Mapping[str] = None,
  placement: PagesProjectDeploymentConfigsPreviewPlacement = None,
  r2_buckets: typing.Mapping[str] = None,
  secrets: typing.Mapping[str] = None,
  service_binding: typing.Union[IResolvable, typing.List[PagesProjectDeploymentConfigsPreviewServiceBinding]] = None,
  usage_model: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.alwaysUseLatestCompatibilityDate">always_use_latest_compatibility_date</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use latest compatibility date for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityDate">compatibility_date</a></code> | <code>str</code> | Compatibility date used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityFlags">compatibility_flags</a></code> | <code>typing.List[str]</code> | Compatibility flags used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.d1Databases">d1_databases</a></code> | <code>typing.Mapping[str]</code> | D1 Databases used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.durableObjectNamespaces">durable_object_namespaces</a></code> | <code>typing.Mapping[str]</code> | Durable Object namespaces used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Environment variables for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Fail open used for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.kvNamespaces">kv_namespaces</a></code> | <code>typing.Mapping[str]</code> | KV namespaces used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.r2Buckets">r2_buckets</a></code> | <code>typing.Mapping[str]</code> | R2 Buckets used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | Encrypted environment variables for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.serviceBinding">service_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>]]</code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.usageModel">usage_model</a></code> | <code>str</code> | Usage model used for Pages Functions. Defaults to `bundled`. |

---

##### `always_use_latest_compatibility_date`<sup>Optional</sup> <a name="always_use_latest_compatibility_date" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.alwaysUseLatestCompatibilityDate"></a>

```python
always_use_latest_compatibility_date: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use latest compatibility date for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#always_use_latest_compatibility_date PagesProject#always_use_latest_compatibility_date}

---

##### `compatibility_date`<sup>Optional</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityDate"></a>

```python
compatibility_date: str
```

- *Type:* str

Compatibility date used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#compatibility_date PagesProject#compatibility_date}

---

##### `compatibility_flags`<sup>Optional</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityFlags"></a>

```python
compatibility_flags: typing.List[str]
```

- *Type:* typing.List[str]

Compatibility flags used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#compatibility_flags PagesProject#compatibility_flags}

---

##### `d1_databases`<sup>Optional</sup> <a name="d1_databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.d1Databases"></a>

```python
d1_databases: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

D1 Databases used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#d1_databases PagesProject#d1_databases}

---

##### `durable_object_namespaces`<sup>Optional</sup> <a name="durable_object_namespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.durableObjectNamespaces"></a>

```python
durable_object_namespaces: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Durable Object namespaces used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#environment_variables PagesProject#environment_variables}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Fail open used for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#fail_open PagesProject#fail_open}

---

##### `kv_namespaces`<sup>Optional</sup> <a name="kv_namespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.kvNamespaces"></a>

```python
kv_namespaces: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

KV namespaces used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#kv_namespaces PagesProject#kv_namespaces}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.placement"></a>

```python
placement: PagesProjectDeploymentConfigsPreviewPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#placement PagesProject#placement}

---

##### `r2_buckets`<sup>Optional</sup> <a name="r2_buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.r2Buckets"></a>

```python
r2_buckets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

R2 Buckets used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#r2_buckets PagesProject#r2_buckets}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.secrets"></a>

```python
secrets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Encrypted environment variables for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#secrets PagesProject#secrets}

---

##### `service_binding`<sup>Optional</sup> <a name="service_binding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.serviceBinding"></a>

```python
service_binding: typing.Union[IResolvable, typing.List[PagesProjectDeploymentConfigsPreviewServiceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>]]

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#service_binding PagesProject#service_binding}

---

##### `usage_model`<sup>Optional</sup> <a name="usage_model" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.usageModel"></a>

```python
usage_model: str
```

- *Type:* str

Usage model used for Pages Functions. Defaults to `bundled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#usage_model PagesProject#usage_model}

---

### PagesProjectDeploymentConfigsPreviewPlacement <a name="PagesProjectDeploymentConfigsPreviewPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectDeploymentConfigsPreviewPlacement(
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement.property.mode">mode</a></code> | <code>str</code> | Placement Mode for the Pages Function. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement.property.mode"></a>

```python
mode: str
```

- *Type:* str

Placement Mode for the Pages Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#mode PagesProject#mode}

---

### PagesProjectDeploymentConfigsPreviewServiceBinding <a name="PagesProjectDeploymentConfigsPreviewServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding(
  name: str,
  service: str,
  environment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.service">service</a></code> | <code>str</code> | The name of the Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.environment">environment</a></code> | <code>str</code> | The name of the Worker environment to bind to. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#name PagesProject#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.service"></a>

```python
service: str
```

- *Type:* str

The name of the Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#service PagesProject#service}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.environment"></a>

```python
environment: str
```

- *Type:* str

The name of the Worker environment to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#environment PagesProject#environment}

---

### PagesProjectDeploymentConfigsProduction <a name="PagesProjectDeploymentConfigsProduction" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectDeploymentConfigsProduction(
  always_use_latest_compatibility_date: typing.Union[bool, IResolvable] = None,
  compatibility_date: str = None,
  compatibility_flags: typing.List[str] = None,
  d1_databases: typing.Mapping[str] = None,
  durable_object_namespaces: typing.Mapping[str] = None,
  environment_variables: typing.Mapping[str] = None,
  fail_open: typing.Union[bool, IResolvable] = None,
  kv_namespaces: typing.Mapping[str] = None,
  placement: PagesProjectDeploymentConfigsProductionPlacement = None,
  r2_buckets: typing.Mapping[str] = None,
  secrets: typing.Mapping[str] = None,
  service_binding: typing.Union[IResolvable, typing.List[PagesProjectDeploymentConfigsProductionServiceBinding]] = None,
  usage_model: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.alwaysUseLatestCompatibilityDate">always_use_latest_compatibility_date</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use latest compatibility date for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityDate">compatibility_date</a></code> | <code>str</code> | Compatibility date used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityFlags">compatibility_flags</a></code> | <code>typing.List[str]</code> | Compatibility flags used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.d1Databases">d1_databases</a></code> | <code>typing.Mapping[str]</code> | D1 Databases used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.durableObjectNamespaces">durable_object_namespaces</a></code> | <code>typing.Mapping[str]</code> | Durable Object namespaces used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Environment variables for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Fail open used for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.kvNamespaces">kv_namespaces</a></code> | <code>typing.Mapping[str]</code> | KV namespaces used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.r2Buckets">r2_buckets</a></code> | <code>typing.Mapping[str]</code> | R2 Buckets used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | Encrypted environment variables for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.serviceBinding">service_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>]]</code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.usageModel">usage_model</a></code> | <code>str</code> | Usage model used for Pages Functions. Defaults to `bundled`. |

---

##### `always_use_latest_compatibility_date`<sup>Optional</sup> <a name="always_use_latest_compatibility_date" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.alwaysUseLatestCompatibilityDate"></a>

```python
always_use_latest_compatibility_date: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use latest compatibility date for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#always_use_latest_compatibility_date PagesProject#always_use_latest_compatibility_date}

---

##### `compatibility_date`<sup>Optional</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityDate"></a>

```python
compatibility_date: str
```

- *Type:* str

Compatibility date used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#compatibility_date PagesProject#compatibility_date}

---

##### `compatibility_flags`<sup>Optional</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityFlags"></a>

```python
compatibility_flags: typing.List[str]
```

- *Type:* typing.List[str]

Compatibility flags used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#compatibility_flags PagesProject#compatibility_flags}

---

##### `d1_databases`<sup>Optional</sup> <a name="d1_databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.d1Databases"></a>

```python
d1_databases: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

D1 Databases used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#d1_databases PagesProject#d1_databases}

---

##### `durable_object_namespaces`<sup>Optional</sup> <a name="durable_object_namespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.durableObjectNamespaces"></a>

```python
durable_object_namespaces: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Durable Object namespaces used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#environment_variables PagesProject#environment_variables}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Fail open used for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#fail_open PagesProject#fail_open}

---

##### `kv_namespaces`<sup>Optional</sup> <a name="kv_namespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.kvNamespaces"></a>

```python
kv_namespaces: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

KV namespaces used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#kv_namespaces PagesProject#kv_namespaces}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.placement"></a>

```python
placement: PagesProjectDeploymentConfigsProductionPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#placement PagesProject#placement}

---

##### `r2_buckets`<sup>Optional</sup> <a name="r2_buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.r2Buckets"></a>

```python
r2_buckets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

R2 Buckets used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#r2_buckets PagesProject#r2_buckets}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.secrets"></a>

```python
secrets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Encrypted environment variables for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#secrets PagesProject#secrets}

---

##### `service_binding`<sup>Optional</sup> <a name="service_binding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.serviceBinding"></a>

```python
service_binding: typing.Union[IResolvable, typing.List[PagesProjectDeploymentConfigsProductionServiceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>]]

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#service_binding PagesProject#service_binding}

---

##### `usage_model`<sup>Optional</sup> <a name="usage_model" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.usageModel"></a>

```python
usage_model: str
```

- *Type:* str

Usage model used for Pages Functions. Defaults to `bundled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#usage_model PagesProject#usage_model}

---

### PagesProjectDeploymentConfigsProductionPlacement <a name="PagesProjectDeploymentConfigsProductionPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectDeploymentConfigsProductionPlacement(
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement.property.mode">mode</a></code> | <code>str</code> | Placement Mode for the Pages Function. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement.property.mode"></a>

```python
mode: str
```

- *Type:* str

Placement Mode for the Pages Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#mode PagesProject#mode}

---

### PagesProjectDeploymentConfigsProductionServiceBinding <a name="PagesProjectDeploymentConfigsProductionServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding(
  name: str,
  service: str,
  environment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.service">service</a></code> | <code>str</code> | The name of the Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.environment">environment</a></code> | <code>str</code> | The name of the Worker environment to bind to. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#name PagesProject#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.service"></a>

```python
service: str
```

- *Type:* str

The name of the Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#service PagesProject#service}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.environment"></a>

```python
environment: str
```

- *Type:* str

The name of the Worker environment to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#environment PagesProject#environment}

---

### PagesProjectSource <a name="PagesProjectSource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectSource(
  config: PagesProjectSourceConfig = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.type">type</a></code> | <code>str</code> | Project host type. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.config"></a>

```python
config: PagesProjectSourceConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#config PagesProject#config}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.type"></a>

```python
type: str
```

- *Type:* str

Project host type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#type PagesProject#type}

---

### PagesProjectSourceConfig <a name="PagesProjectSourceConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectSourceConfig(
  production_branch: str,
  deployments_enabled: typing.Union[bool, IResolvable] = None,
  owner: str = None,
  pr_comments_enabled: typing.Union[bool, IResolvable] = None,
  preview_branch_excludes: typing.List[str] = None,
  preview_branch_includes: typing.List[str] = None,
  preview_deployment_setting: str = None,
  production_deployment_enabled: typing.Union[bool, IResolvable] = None,
  repo_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionBranch">production_branch</a></code> | <code>str</code> | Project production branch name. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.deploymentsEnabled">deployments_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Toggle deployments on this repo. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.owner">owner</a></code> | <code>str</code> | Project owner username. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.prCommentsEnabled">pr_comments_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Pages to comment on Pull Requests. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchExcludes">preview_branch_excludes</a></code> | <code>typing.List[str]</code> | Branches will be excluded from automatic deployment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchIncludes">preview_branch_includes</a></code> | <code>typing.List[str]</code> | Branches will be included for automatic deployment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewDeploymentSetting">preview_deployment_setting</a></code> | <code>str</code> | Preview Deployment Setting. Defaults to `all`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionDeploymentEnabled">production_deployment_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable production deployments. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.repoName">repo_name</a></code> | <code>str</code> | Project repository name. |

---

##### `production_branch`<sup>Required</sup> <a name="production_branch" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionBranch"></a>

```python
production_branch: str
```

- *Type:* str

Project production branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#production_branch PagesProject#production_branch}

---

##### `deployments_enabled`<sup>Optional</sup> <a name="deployments_enabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.deploymentsEnabled"></a>

```python
deployments_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Toggle deployments on this repo. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#deployments_enabled PagesProject#deployments_enabled}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Project owner username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#owner PagesProject#owner}

---

##### `pr_comments_enabled`<sup>Optional</sup> <a name="pr_comments_enabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.prCommentsEnabled"></a>

```python
pr_comments_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Pages to comment on Pull Requests. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#pr_comments_enabled PagesProject#pr_comments_enabled}

---

##### `preview_branch_excludes`<sup>Optional</sup> <a name="preview_branch_excludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchExcludes"></a>

```python
preview_branch_excludes: typing.List[str]
```

- *Type:* typing.List[str]

Branches will be excluded from automatic deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#preview_branch_excludes PagesProject#preview_branch_excludes}

---

##### `preview_branch_includes`<sup>Optional</sup> <a name="preview_branch_includes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchIncludes"></a>

```python
preview_branch_includes: typing.List[str]
```

- *Type:* typing.List[str]

Branches will be included for automatic deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#preview_branch_includes PagesProject#preview_branch_includes}

---

##### `preview_deployment_setting`<sup>Optional</sup> <a name="preview_deployment_setting" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewDeploymentSetting"></a>

```python
preview_deployment_setting: str
```

- *Type:* str

Preview Deployment Setting. Defaults to `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#preview_deployment_setting PagesProject#preview_deployment_setting}

---

##### `production_deployment_enabled`<sup>Optional</sup> <a name="production_deployment_enabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionDeploymentEnabled"></a>

```python
production_deployment_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable production deployments. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#production_deployment_enabled PagesProject#production_deployment_enabled}

---

##### `repo_name`<sup>Optional</sup> <a name="repo_name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.repoName"></a>

```python
repo_name: str
```

- *Type:* str

Project repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#repo_name PagesProject#repo_name}

---

## Classes <a name="Classes" id="Classes"></a>

### PagesProjectBuildConfigOutputReference <a name="PagesProjectBuildConfigOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectBuildConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetBuildCommand">reset_build_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetDestinationDir">reset_destination_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetRootDir">reset_root_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsTag">reset_web_analytics_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsToken">reset_web_analytics_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_build_command` <a name="reset_build_command" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetBuildCommand"></a>

```python
def reset_build_command() -> None
```

##### `reset_destination_dir` <a name="reset_destination_dir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetDestinationDir"></a>

```python
def reset_destination_dir() -> None
```

##### `reset_root_dir` <a name="reset_root_dir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetRootDir"></a>

```python
def reset_root_dir() -> None
```

##### `reset_web_analytics_tag` <a name="reset_web_analytics_tag" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsTag"></a>

```python
def reset_web_analytics_tag() -> None
```

##### `reset_web_analytics_token` <a name="reset_web_analytics_token" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsToken"></a>

```python
def reset_web_analytics_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommandInput">build_command_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDirInput">destination_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDirInput">root_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTagInput">web_analytics_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTokenInput">web_analytics_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommand">build_command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDir">destination_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDir">root_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTag">web_analytics_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsToken">web_analytics_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `build_command_input`<sup>Optional</sup> <a name="build_command_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommandInput"></a>

```python
build_command_input: str
```

- *Type:* str

---

##### `destination_dir_input`<sup>Optional</sup> <a name="destination_dir_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDirInput"></a>

```python
destination_dir_input: str
```

- *Type:* str

---

##### `root_dir_input`<sup>Optional</sup> <a name="root_dir_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDirInput"></a>

```python
root_dir_input: str
```

- *Type:* str

---

##### `web_analytics_tag_input`<sup>Optional</sup> <a name="web_analytics_tag_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTagInput"></a>

```python
web_analytics_tag_input: str
```

- *Type:* str

---

##### `web_analytics_token_input`<sup>Optional</sup> <a name="web_analytics_token_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTokenInput"></a>

```python
web_analytics_token_input: str
```

- *Type:* str

---

##### `build_command`<sup>Required</sup> <a name="build_command" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommand"></a>

```python
build_command: str
```

- *Type:* str

---

##### `destination_dir`<sup>Required</sup> <a name="destination_dir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDir"></a>

```python
destination_dir: str
```

- *Type:* str

---

##### `root_dir`<sup>Required</sup> <a name="root_dir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDir"></a>

```python
root_dir: str
```

- *Type:* str

---

##### `web_analytics_tag`<sup>Required</sup> <a name="web_analytics_tag" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTag"></a>

```python
web_analytics_tag: str
```

- *Type:* str

---

##### `web_analytics_token`<sup>Required</sup> <a name="web_analytics_token" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsToken"></a>

```python
web_analytics_token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.internalValue"></a>

```python
internal_value: PagesProjectBuildConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

---


### PagesProjectDeploymentConfigsOutputReference <a name="PagesProjectDeploymentConfigsOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectDeploymentConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview">put_preview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction">put_production</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_preview` <a name="put_preview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview"></a>

```python
def put_preview(
  always_use_latest_compatibility_date: typing.Union[bool, IResolvable] = None,
  compatibility_date: str = None,
  compatibility_flags: typing.List[str] = None,
  d1_databases: typing.Mapping[str] = None,
  durable_object_namespaces: typing.Mapping[str] = None,
  environment_variables: typing.Mapping[str] = None,
  fail_open: typing.Union[bool, IResolvable] = None,
  kv_namespaces: typing.Mapping[str] = None,
  placement: PagesProjectDeploymentConfigsPreviewPlacement = None,
  r2_buckets: typing.Mapping[str] = None,
  secrets: typing.Mapping[str] = None,
  service_binding: typing.Union[IResolvable, typing.List[PagesProjectDeploymentConfigsPreviewServiceBinding]] = None,
  usage_model: str = None
) -> None
```

###### `always_use_latest_compatibility_date`<sup>Optional</sup> <a name="always_use_latest_compatibility_date" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.alwaysUseLatestCompatibilityDate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use latest compatibility date for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#always_use_latest_compatibility_date PagesProject#always_use_latest_compatibility_date}

---

###### `compatibility_date`<sup>Optional</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.compatibilityDate"></a>

- *Type:* str

Compatibility date used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#compatibility_date PagesProject#compatibility_date}

---

###### `compatibility_flags`<sup>Optional</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.compatibilityFlags"></a>

- *Type:* typing.List[str]

Compatibility flags used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#compatibility_flags PagesProject#compatibility_flags}

---

###### `d1_databases`<sup>Optional</sup> <a name="d1_databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.d1Databases"></a>

- *Type:* typing.Mapping[str]

D1 Databases used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#d1_databases PagesProject#d1_databases}

---

###### `durable_object_namespaces`<sup>Optional</sup> <a name="durable_object_namespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.durableObjectNamespaces"></a>

- *Type:* typing.Mapping[str]

Durable Object namespaces used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}

---

###### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Environment variables for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#environment_variables PagesProject#environment_variables}

---

###### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.failOpen"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Fail open used for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#fail_open PagesProject#fail_open}

---

###### `kv_namespaces`<sup>Optional</sup> <a name="kv_namespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.kvNamespaces"></a>

- *Type:* typing.Mapping[str]

KV namespaces used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#kv_namespaces PagesProject#kv_namespaces}

---

###### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.placement"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#placement PagesProject#placement}

---

###### `r2_buckets`<sup>Optional</sup> <a name="r2_buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.r2Buckets"></a>

- *Type:* typing.Mapping[str]

R2 Buckets used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#r2_buckets PagesProject#r2_buckets}

---

###### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.secrets"></a>

- *Type:* typing.Mapping[str]

Encrypted environment variables for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#secrets PagesProject#secrets}

---

###### `service_binding`<sup>Optional</sup> <a name="service_binding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.serviceBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>]]

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#service_binding PagesProject#service_binding}

---

###### `usage_model`<sup>Optional</sup> <a name="usage_model" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.usageModel"></a>

- *Type:* str

Usage model used for Pages Functions. Defaults to `bundled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#usage_model PagesProject#usage_model}

---

##### `put_production` <a name="put_production" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction"></a>

```python
def put_production(
  always_use_latest_compatibility_date: typing.Union[bool, IResolvable] = None,
  compatibility_date: str = None,
  compatibility_flags: typing.List[str] = None,
  d1_databases: typing.Mapping[str] = None,
  durable_object_namespaces: typing.Mapping[str] = None,
  environment_variables: typing.Mapping[str] = None,
  fail_open: typing.Union[bool, IResolvable] = None,
  kv_namespaces: typing.Mapping[str] = None,
  placement: PagesProjectDeploymentConfigsProductionPlacement = None,
  r2_buckets: typing.Mapping[str] = None,
  secrets: typing.Mapping[str] = None,
  service_binding: typing.Union[IResolvable, typing.List[PagesProjectDeploymentConfigsProductionServiceBinding]] = None,
  usage_model: str = None
) -> None
```

###### `always_use_latest_compatibility_date`<sup>Optional</sup> <a name="always_use_latest_compatibility_date" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.alwaysUseLatestCompatibilityDate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use latest compatibility date for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#always_use_latest_compatibility_date PagesProject#always_use_latest_compatibility_date}

---

###### `compatibility_date`<sup>Optional</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.compatibilityDate"></a>

- *Type:* str

Compatibility date used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#compatibility_date PagesProject#compatibility_date}

---

###### `compatibility_flags`<sup>Optional</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.compatibilityFlags"></a>

- *Type:* typing.List[str]

Compatibility flags used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#compatibility_flags PagesProject#compatibility_flags}

---

###### `d1_databases`<sup>Optional</sup> <a name="d1_databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.d1Databases"></a>

- *Type:* typing.Mapping[str]

D1 Databases used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#d1_databases PagesProject#d1_databases}

---

###### `durable_object_namespaces`<sup>Optional</sup> <a name="durable_object_namespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.durableObjectNamespaces"></a>

- *Type:* typing.Mapping[str]

Durable Object namespaces used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}

---

###### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Environment variables for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#environment_variables PagesProject#environment_variables}

---

###### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.failOpen"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Fail open used for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#fail_open PagesProject#fail_open}

---

###### `kv_namespaces`<sup>Optional</sup> <a name="kv_namespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.kvNamespaces"></a>

- *Type:* typing.Mapping[str]

KV namespaces used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#kv_namespaces PagesProject#kv_namespaces}

---

###### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.placement"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#placement PagesProject#placement}

---

###### `r2_buckets`<sup>Optional</sup> <a name="r2_buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.r2Buckets"></a>

- *Type:* typing.Mapping[str]

R2 Buckets used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#r2_buckets PagesProject#r2_buckets}

---

###### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.secrets"></a>

- *Type:* typing.Mapping[str]

Encrypted environment variables for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#secrets PagesProject#secrets}

---

###### `service_binding`<sup>Optional</sup> <a name="service_binding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.serviceBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>]]

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#service_binding PagesProject#service_binding}

---

###### `usage_model`<sup>Optional</sup> <a name="usage_model" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.usageModel"></a>

- *Type:* str

Usage model used for Pages Functions. Defaults to `bundled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#usage_model PagesProject#usage_model}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.preview">preview</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference">PagesProjectDeploymentConfigsPreviewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.production">production</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference">PagesProjectDeploymentConfigsProductionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.previewInput">preview_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.productionInput">production_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.preview"></a>

```python
preview: PagesProjectDeploymentConfigsPreviewOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference">PagesProjectDeploymentConfigsPreviewOutputReference</a>

---

##### `production`<sup>Required</sup> <a name="production" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.production"></a>

```python
production: PagesProjectDeploymentConfigsProductionOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference">PagesProjectDeploymentConfigsProductionOutputReference</a>

---

##### `preview_input`<sup>Optional</sup> <a name="preview_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.previewInput"></a>

```python
preview_input: PagesProjectDeploymentConfigsPreview
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

---

##### `production_input`<sup>Optional</sup> <a name="production_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.productionInput"></a>

```python
production_input: PagesProjectDeploymentConfigsProduction
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.internalValue"></a>

```python
internal_value: PagesProjectDeploymentConfigs
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

---


### PagesProjectDeploymentConfigsPreviewOutputReference <a name="PagesProjectDeploymentConfigsPreviewOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putPlacement">put_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putServiceBinding">put_service_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetAlwaysUseLatestCompatibilityDate">reset_always_use_latest_compatibility_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityDate">reset_compatibility_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityFlags">reset_compatibility_flags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetD1Databases">reset_d1_databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetDurableObjectNamespaces">reset_durable_object_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetFailOpen">reset_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetKvNamespaces">reset_kv_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetPlacement">reset_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetR2Buckets">reset_r2_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetSecrets">reset_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetServiceBinding">reset_service_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetUsageModel">reset_usage_model</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_placement` <a name="put_placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putPlacement"></a>

```python
def put_placement(
  mode: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putPlacement.parameter.mode"></a>

- *Type:* str

Placement Mode for the Pages Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#mode PagesProject#mode}

---

##### `put_service_binding` <a name="put_service_binding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putServiceBinding"></a>

```python
def put_service_binding(
  value: typing.Union[IResolvable, typing.List[PagesProjectDeploymentConfigsPreviewServiceBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putServiceBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>]]

---

##### `reset_always_use_latest_compatibility_date` <a name="reset_always_use_latest_compatibility_date" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetAlwaysUseLatestCompatibilityDate"></a>

```python
def reset_always_use_latest_compatibility_date() -> None
```

##### `reset_compatibility_date` <a name="reset_compatibility_date" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityDate"></a>

```python
def reset_compatibility_date() -> None
```

##### `reset_compatibility_flags` <a name="reset_compatibility_flags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityFlags"></a>

```python
def reset_compatibility_flags() -> None
```

##### `reset_d1_databases` <a name="reset_d1_databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetD1Databases"></a>

```python
def reset_d1_databases() -> None
```

##### `reset_durable_object_namespaces` <a name="reset_durable_object_namespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetDurableObjectNamespaces"></a>

```python
def reset_durable_object_namespaces() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```

##### `reset_kv_namespaces` <a name="reset_kv_namespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetKvNamespaces"></a>

```python
def reset_kv_namespaces() -> None
```

##### `reset_placement` <a name="reset_placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetPlacement"></a>

```python
def reset_placement() -> None
```

##### `reset_r2_buckets` <a name="reset_r2_buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetR2Buckets"></a>

```python
def reset_r2_buckets() -> None
```

##### `reset_secrets` <a name="reset_secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetSecrets"></a>

```python
def reset_secrets() -> None
```

##### `reset_service_binding` <a name="reset_service_binding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetServiceBinding"></a>

```python
def reset_service_binding() -> None
```

##### `reset_usage_model` <a name="reset_usage_model" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetUsageModel"></a>

```python
def reset_usage_model() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference">PagesProjectDeploymentConfigsPreviewPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBinding">service_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList">PagesProjectDeploymentConfigsPreviewServiceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDateInput">always_use_latest_compatibility_date_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDateInput">compatibility_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlagsInput">compatibility_flags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1DatabasesInput">d1_databases_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespacesInput">durable_object_namespaces_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpenInput">fail_open_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespacesInput">kv_namespaces_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.placementInput">placement_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2BucketsInput">r2_buckets_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.secretsInput">secrets_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBindingInput">service_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModelInput">usage_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDate">always_use_latest_compatibility_date</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDate">compatibility_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlags">compatibility_flags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1Databases">d1_databases</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespaces">durable_object_namespaces</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespaces">kv_namespaces</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2Buckets">r2_buckets</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModel">usage_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.placement"></a>

```python
placement: PagesProjectDeploymentConfigsPreviewPlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference">PagesProjectDeploymentConfigsPreviewPlacementOutputReference</a>

---

##### `service_binding`<sup>Required</sup> <a name="service_binding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBinding"></a>

```python
service_binding: PagesProjectDeploymentConfigsPreviewServiceBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList">PagesProjectDeploymentConfigsPreviewServiceBindingList</a>

---

##### `always_use_latest_compatibility_date_input`<sup>Optional</sup> <a name="always_use_latest_compatibility_date_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDateInput"></a>

```python
always_use_latest_compatibility_date_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compatibility_date_input`<sup>Optional</sup> <a name="compatibility_date_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDateInput"></a>

```python
compatibility_date_input: str
```

- *Type:* str

---

##### `compatibility_flags_input`<sup>Optional</sup> <a name="compatibility_flags_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlagsInput"></a>

```python
compatibility_flags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `d1_databases_input`<sup>Optional</sup> <a name="d1_databases_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1DatabasesInput"></a>

```python
d1_databases_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `durable_object_namespaces_input`<sup>Optional</sup> <a name="durable_object_namespaces_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespacesInput"></a>

```python
durable_object_namespaces_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpenInput"></a>

```python
fail_open_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kv_namespaces_input`<sup>Optional</sup> <a name="kv_namespaces_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespacesInput"></a>

```python
kv_namespaces_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `placement_input`<sup>Optional</sup> <a name="placement_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.placementInput"></a>

```python
placement_input: PagesProjectDeploymentConfigsPreviewPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a>

---

##### `r2_buckets_input`<sup>Optional</sup> <a name="r2_buckets_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2BucketsInput"></a>

```python
r2_buckets_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secrets_input`<sup>Optional</sup> <a name="secrets_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.secretsInput"></a>

```python
secrets_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `service_binding_input`<sup>Optional</sup> <a name="service_binding_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBindingInput"></a>

```python
service_binding_input: typing.Union[IResolvable, typing.List[PagesProjectDeploymentConfigsPreviewServiceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>]]

---

##### `usage_model_input`<sup>Optional</sup> <a name="usage_model_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModelInput"></a>

```python
usage_model_input: str
```

- *Type:* str

---

##### `always_use_latest_compatibility_date`<sup>Required</sup> <a name="always_use_latest_compatibility_date" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDate"></a>

```python
always_use_latest_compatibility_date: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compatibility_date`<sup>Required</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDate"></a>

```python
compatibility_date: str
```

- *Type:* str

---

##### `compatibility_flags`<sup>Required</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlags"></a>

```python
compatibility_flags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `d1_databases`<sup>Required</sup> <a name="d1_databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1Databases"></a>

```python
d1_databases: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `durable_object_namespaces`<sup>Required</sup> <a name="durable_object_namespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespaces"></a>

```python
durable_object_namespaces: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kv_namespaces`<sup>Required</sup> <a name="kv_namespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespaces"></a>

```python
kv_namespaces: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `r2_buckets`<sup>Required</sup> <a name="r2_buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2Buckets"></a>

```python
r2_buckets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.secrets"></a>

```python
secrets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `usage_model`<sup>Required</sup> <a name="usage_model" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModel"></a>

```python
usage_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.internalValue"></a>

```python
internal_value: PagesProjectDeploymentConfigsPreview
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

---


### PagesProjectDeploymentConfigsPreviewPlacementOutputReference <a name="PagesProjectDeploymentConfigsPreviewPlacementOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.internalValue"></a>

```python
internal_value: PagesProjectDeploymentConfigsPreviewPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a>

---


### PagesProjectDeploymentConfigsPreviewServiceBindingList <a name="PagesProjectDeploymentConfigsPreviewServiceBindingList" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PagesProjectDeploymentConfigsPreviewServiceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>]]

---


### PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference <a name="PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PagesProjectDeploymentConfigsPreviewServiceBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>]

---


### PagesProjectDeploymentConfigsProductionOutputReference <a name="PagesProjectDeploymentConfigsProductionOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectDeploymentConfigsProductionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putPlacement">put_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putServiceBinding">put_service_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetAlwaysUseLatestCompatibilityDate">reset_always_use_latest_compatibility_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityDate">reset_compatibility_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityFlags">reset_compatibility_flags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetD1Databases">reset_d1_databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetDurableObjectNamespaces">reset_durable_object_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetFailOpen">reset_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetKvNamespaces">reset_kv_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetPlacement">reset_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetR2Buckets">reset_r2_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetSecrets">reset_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetServiceBinding">reset_service_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetUsageModel">reset_usage_model</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_placement` <a name="put_placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putPlacement"></a>

```python
def put_placement(
  mode: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putPlacement.parameter.mode"></a>

- *Type:* str

Placement Mode for the Pages Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#mode PagesProject#mode}

---

##### `put_service_binding` <a name="put_service_binding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putServiceBinding"></a>

```python
def put_service_binding(
  value: typing.Union[IResolvable, typing.List[PagesProjectDeploymentConfigsProductionServiceBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putServiceBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>]]

---

##### `reset_always_use_latest_compatibility_date` <a name="reset_always_use_latest_compatibility_date" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetAlwaysUseLatestCompatibilityDate"></a>

```python
def reset_always_use_latest_compatibility_date() -> None
```

##### `reset_compatibility_date` <a name="reset_compatibility_date" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityDate"></a>

```python
def reset_compatibility_date() -> None
```

##### `reset_compatibility_flags` <a name="reset_compatibility_flags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityFlags"></a>

```python
def reset_compatibility_flags() -> None
```

##### `reset_d1_databases` <a name="reset_d1_databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetD1Databases"></a>

```python
def reset_d1_databases() -> None
```

##### `reset_durable_object_namespaces` <a name="reset_durable_object_namespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetDurableObjectNamespaces"></a>

```python
def reset_durable_object_namespaces() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```

##### `reset_kv_namespaces` <a name="reset_kv_namespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetKvNamespaces"></a>

```python
def reset_kv_namespaces() -> None
```

##### `reset_placement` <a name="reset_placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetPlacement"></a>

```python
def reset_placement() -> None
```

##### `reset_r2_buckets` <a name="reset_r2_buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetR2Buckets"></a>

```python
def reset_r2_buckets() -> None
```

##### `reset_secrets` <a name="reset_secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetSecrets"></a>

```python
def reset_secrets() -> None
```

##### `reset_service_binding` <a name="reset_service_binding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetServiceBinding"></a>

```python
def reset_service_binding() -> None
```

##### `reset_usage_model` <a name="reset_usage_model" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetUsageModel"></a>

```python
def reset_usage_model() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference">PagesProjectDeploymentConfigsProductionPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBinding">service_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList">PagesProjectDeploymentConfigsProductionServiceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDateInput">always_use_latest_compatibility_date_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDateInput">compatibility_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlagsInput">compatibility_flags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1DatabasesInput">d1_databases_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespacesInput">durable_object_namespaces_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpenInput">fail_open_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespacesInput">kv_namespaces_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.placementInput">placement_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2BucketsInput">r2_buckets_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.secretsInput">secrets_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBindingInput">service_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModelInput">usage_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDate">always_use_latest_compatibility_date</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDate">compatibility_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlags">compatibility_flags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1Databases">d1_databases</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespaces">durable_object_namespaces</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespaces">kv_namespaces</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2Buckets">r2_buckets</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModel">usage_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.placement"></a>

```python
placement: PagesProjectDeploymentConfigsProductionPlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference">PagesProjectDeploymentConfigsProductionPlacementOutputReference</a>

---

##### `service_binding`<sup>Required</sup> <a name="service_binding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBinding"></a>

```python
service_binding: PagesProjectDeploymentConfigsProductionServiceBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList">PagesProjectDeploymentConfigsProductionServiceBindingList</a>

---

##### `always_use_latest_compatibility_date_input`<sup>Optional</sup> <a name="always_use_latest_compatibility_date_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDateInput"></a>

```python
always_use_latest_compatibility_date_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compatibility_date_input`<sup>Optional</sup> <a name="compatibility_date_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDateInput"></a>

```python
compatibility_date_input: str
```

- *Type:* str

---

##### `compatibility_flags_input`<sup>Optional</sup> <a name="compatibility_flags_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlagsInput"></a>

```python
compatibility_flags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `d1_databases_input`<sup>Optional</sup> <a name="d1_databases_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1DatabasesInput"></a>

```python
d1_databases_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `durable_object_namespaces_input`<sup>Optional</sup> <a name="durable_object_namespaces_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespacesInput"></a>

```python
durable_object_namespaces_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpenInput"></a>

```python
fail_open_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kv_namespaces_input`<sup>Optional</sup> <a name="kv_namespaces_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespacesInput"></a>

```python
kv_namespaces_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `placement_input`<sup>Optional</sup> <a name="placement_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.placementInput"></a>

```python
placement_input: PagesProjectDeploymentConfigsProductionPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a>

---

##### `r2_buckets_input`<sup>Optional</sup> <a name="r2_buckets_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2BucketsInput"></a>

```python
r2_buckets_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secrets_input`<sup>Optional</sup> <a name="secrets_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.secretsInput"></a>

```python
secrets_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `service_binding_input`<sup>Optional</sup> <a name="service_binding_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBindingInput"></a>

```python
service_binding_input: typing.Union[IResolvable, typing.List[PagesProjectDeploymentConfigsProductionServiceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>]]

---

##### `usage_model_input`<sup>Optional</sup> <a name="usage_model_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModelInput"></a>

```python
usage_model_input: str
```

- *Type:* str

---

##### `always_use_latest_compatibility_date`<sup>Required</sup> <a name="always_use_latest_compatibility_date" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDate"></a>

```python
always_use_latest_compatibility_date: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compatibility_date`<sup>Required</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDate"></a>

```python
compatibility_date: str
```

- *Type:* str

---

##### `compatibility_flags`<sup>Required</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlags"></a>

```python
compatibility_flags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `d1_databases`<sup>Required</sup> <a name="d1_databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1Databases"></a>

```python
d1_databases: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `durable_object_namespaces`<sup>Required</sup> <a name="durable_object_namespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespaces"></a>

```python
durable_object_namespaces: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kv_namespaces`<sup>Required</sup> <a name="kv_namespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespaces"></a>

```python
kv_namespaces: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `r2_buckets`<sup>Required</sup> <a name="r2_buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2Buckets"></a>

```python
r2_buckets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.secrets"></a>

```python
secrets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `usage_model`<sup>Required</sup> <a name="usage_model" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModel"></a>

```python
usage_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.internalValue"></a>

```python
internal_value: PagesProjectDeploymentConfigsProduction
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

---


### PagesProjectDeploymentConfigsProductionPlacementOutputReference <a name="PagesProjectDeploymentConfigsProductionPlacementOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.internalValue"></a>

```python
internal_value: PagesProjectDeploymentConfigsProductionPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a>

---


### PagesProjectDeploymentConfigsProductionServiceBindingList <a name="PagesProjectDeploymentConfigsProductionServiceBindingList" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PagesProjectDeploymentConfigsProductionServiceBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PagesProjectDeploymentConfigsProductionServiceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>]]

---


### PagesProjectDeploymentConfigsProductionServiceBindingOutputReference <a name="PagesProjectDeploymentConfigsProductionServiceBindingOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PagesProjectDeploymentConfigsProductionServiceBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>]

---


### PagesProjectSourceConfigOutputReference <a name="PagesProjectSourceConfigOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetDeploymentsEnabled">reset_deployments_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPrCommentsEnabled">reset_pr_comments_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchExcludes">reset_preview_branch_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchIncludes">reset_preview_branch_includes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewDeploymentSetting">reset_preview_deployment_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetProductionDeploymentEnabled">reset_production_deployment_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetRepoName">reset_repo_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deployments_enabled` <a name="reset_deployments_enabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetDeploymentsEnabled"></a>

```python
def reset_deployments_enabled() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_pr_comments_enabled` <a name="reset_pr_comments_enabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPrCommentsEnabled"></a>

```python
def reset_pr_comments_enabled() -> None
```

##### `reset_preview_branch_excludes` <a name="reset_preview_branch_excludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchExcludes"></a>

```python
def reset_preview_branch_excludes() -> None
```

##### `reset_preview_branch_includes` <a name="reset_preview_branch_includes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchIncludes"></a>

```python
def reset_preview_branch_includes() -> None
```

##### `reset_preview_deployment_setting` <a name="reset_preview_deployment_setting" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewDeploymentSetting"></a>

```python
def reset_preview_deployment_setting() -> None
```

##### `reset_production_deployment_enabled` <a name="reset_production_deployment_enabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetProductionDeploymentEnabled"></a>

```python
def reset_production_deployment_enabled() -> None
```

##### `reset_repo_name` <a name="reset_repo_name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetRepoName"></a>

```python
def reset_repo_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabledInput">deployments_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabledInput">pr_comments_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludesInput">preview_branch_excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludesInput">preview_branch_includes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSettingInput">preview_deployment_setting_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranchInput">production_branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabledInput">production_deployment_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoNameInput">repo_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabled">deployments_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabled">pr_comments_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludes">preview_branch_excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludes">preview_branch_includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSetting">preview_deployment_setting</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranch">production_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabled">production_deployment_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoName">repo_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployments_enabled_input`<sup>Optional</sup> <a name="deployments_enabled_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabledInput"></a>

```python
deployments_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `pr_comments_enabled_input`<sup>Optional</sup> <a name="pr_comments_enabled_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabledInput"></a>

```python
pr_comments_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `preview_branch_excludes_input`<sup>Optional</sup> <a name="preview_branch_excludes_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludesInput"></a>

```python
preview_branch_excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preview_branch_includes_input`<sup>Optional</sup> <a name="preview_branch_includes_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludesInput"></a>

```python
preview_branch_includes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preview_deployment_setting_input`<sup>Optional</sup> <a name="preview_deployment_setting_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSettingInput"></a>

```python
preview_deployment_setting_input: str
```

- *Type:* str

---

##### `production_branch_input`<sup>Optional</sup> <a name="production_branch_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranchInput"></a>

```python
production_branch_input: str
```

- *Type:* str

---

##### `production_deployment_enabled_input`<sup>Optional</sup> <a name="production_deployment_enabled_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabledInput"></a>

```python
production_deployment_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repo_name_input`<sup>Optional</sup> <a name="repo_name_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoNameInput"></a>

```python
repo_name_input: str
```

- *Type:* str

---

##### `deployments_enabled`<sup>Required</sup> <a name="deployments_enabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabled"></a>

```python
deployments_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `pr_comments_enabled`<sup>Required</sup> <a name="pr_comments_enabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabled"></a>

```python
pr_comments_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `preview_branch_excludes`<sup>Required</sup> <a name="preview_branch_excludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludes"></a>

```python
preview_branch_excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preview_branch_includes`<sup>Required</sup> <a name="preview_branch_includes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludes"></a>

```python
preview_branch_includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preview_deployment_setting`<sup>Required</sup> <a name="preview_deployment_setting" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSetting"></a>

```python
preview_deployment_setting: str
```

- *Type:* str

---

##### `production_branch`<sup>Required</sup> <a name="production_branch" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranch"></a>

```python
production_branch: str
```

- *Type:* str

---

##### `production_deployment_enabled`<sup>Required</sup> <a name="production_deployment_enabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabled"></a>

```python
production_deployment_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repo_name`<sup>Required</sup> <a name="repo_name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoName"></a>

```python
repo_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: PagesProjectSourceConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

---


### PagesProjectSourceOutputReference <a name="PagesProjectSourceOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import pages_project

pagesProject.PagesProjectSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config` <a name="put_config" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig"></a>

```python
def put_config(
  production_branch: str,
  deployments_enabled: typing.Union[bool, IResolvable] = None,
  owner: str = None,
  pr_comments_enabled: typing.Union[bool, IResolvable] = None,
  preview_branch_excludes: typing.List[str] = None,
  preview_branch_includes: typing.List[str] = None,
  preview_deployment_setting: str = None,
  production_deployment_enabled: typing.Union[bool, IResolvable] = None,
  repo_name: str = None
) -> None
```

###### `production_branch`<sup>Required</sup> <a name="production_branch" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig.parameter.productionBranch"></a>

- *Type:* str

Project production branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#production_branch PagesProject#production_branch}

---

###### `deployments_enabled`<sup>Optional</sup> <a name="deployments_enabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig.parameter.deploymentsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Toggle deployments on this repo. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#deployments_enabled PagesProject#deployments_enabled}

---

###### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig.parameter.owner"></a>

- *Type:* str

Project owner username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#owner PagesProject#owner}

---

###### `pr_comments_enabled`<sup>Optional</sup> <a name="pr_comments_enabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig.parameter.prCommentsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Pages to comment on Pull Requests. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#pr_comments_enabled PagesProject#pr_comments_enabled}

---

###### `preview_branch_excludes`<sup>Optional</sup> <a name="preview_branch_excludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig.parameter.previewBranchExcludes"></a>

- *Type:* typing.List[str]

Branches will be excluded from automatic deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#preview_branch_excludes PagesProject#preview_branch_excludes}

---

###### `preview_branch_includes`<sup>Optional</sup> <a name="preview_branch_includes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig.parameter.previewBranchIncludes"></a>

- *Type:* typing.List[str]

Branches will be included for automatic deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#preview_branch_includes PagesProject#preview_branch_includes}

---

###### `preview_deployment_setting`<sup>Optional</sup> <a name="preview_deployment_setting" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig.parameter.previewDeploymentSetting"></a>

- *Type:* str

Preview Deployment Setting. Defaults to `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#preview_deployment_setting PagesProject#preview_deployment_setting}

---

###### `production_deployment_enabled`<sup>Optional</sup> <a name="production_deployment_enabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig.parameter.productionDeploymentEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable production deployments. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#production_deployment_enabled PagesProject#production_deployment_enabled}

---

###### `repo_name`<sup>Optional</sup> <a name="repo_name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig.parameter.repoName"></a>

- *Type:* str

Project repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/pages_project#repo_name PagesProject#repo_name}

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference">PagesProjectSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.config"></a>

```python
config: PagesProjectSourceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference">PagesProjectSourceConfigOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.configInput"></a>

```python
config_input: PagesProjectSourceConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.internalValue"></a>

```python
internal_value: PagesProjectSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

---



