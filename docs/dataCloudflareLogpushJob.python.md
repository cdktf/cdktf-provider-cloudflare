# `dataCloudflareLogpushJob` Submodule <a name="`dataCloudflareLogpushJob` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLogpushJob <a name="DataCloudflareLogpushJob" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/logpush_job cloudflare_logpush_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_logpush_job

dataCloudflareLogpushJob.DataCloudflareLogpushJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str = None,
  job_id: typing.Union[int, float] = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.jobId">job_id</a></code> | <code>typing.Union[int, float]</code> | Unique id of the job. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.accountId"></a>

- *Type:* str

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/logpush_job#account_id DataCloudflareLogpushJob#account_id}

---

##### `job_id`<sup>Optional</sup> <a name="job_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.jobId"></a>

- *Type:* typing.Union[int, float]

Unique id of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/logpush_job#job_id DataCloudflareLogpushJob#job_id}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.zoneId"></a>

- *Type:* str

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/logpush_job#zone_id DataCloudflareLogpushJob#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.resetJobId">reset_job_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_job_id` <a name="reset_job_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.resetJobId"></a>

```python
def reset_job_id() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareLogpushJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_logpush_job

dataCloudflareLogpushJob.DataCloudflareLogpushJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_logpush_job

dataCloudflareLogpushJob.DataCloudflareLogpushJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_logpush_job

dataCloudflareLogpushJob.DataCloudflareLogpushJob.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_logpush_job

dataCloudflareLogpushJob.DataCloudflareLogpushJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareLogpushJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareLogpushJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareLogpushJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/logpush_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareLogpushJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.destinationConf">destination_conf</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.lastComplete">last_complete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.lastError">last_error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.logpullOptions">logpull_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.maxUploadBytes">max_upload_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.maxUploadIntervalSeconds">max_upload_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.maxUploadRecords">max_upload_records</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.outputOptions">output_options</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference">DataCloudflareLogpushJobOutputOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.jobIdInput">job_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.jobId">job_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `destination_conf`<sup>Required</sup> <a name="destination_conf" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.destinationConf"></a>

```python
destination_conf: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `last_complete`<sup>Required</sup> <a name="last_complete" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.lastComplete"></a>

```python
last_complete: str
```

- *Type:* str

---

##### `last_error`<sup>Required</sup> <a name="last_error" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.lastError"></a>

```python
last_error: str
```

- *Type:* str

---

##### `logpull_options`<sup>Required</sup> <a name="logpull_options" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.logpullOptions"></a>

```python
logpull_options: str
```

- *Type:* str

---

##### `max_upload_bytes`<sup>Required</sup> <a name="max_upload_bytes" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.maxUploadBytes"></a>

```python
max_upload_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_upload_interval_seconds`<sup>Required</sup> <a name="max_upload_interval_seconds" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.maxUploadIntervalSeconds"></a>

```python
max_upload_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_upload_records`<sup>Required</sup> <a name="max_upload_records" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.maxUploadRecords"></a>

```python
max_upload_records: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_options`<sup>Required</sup> <a name="output_options" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.outputOptions"></a>

```python
output_options: DataCloudflareLogpushJobOutputOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference">DataCloudflareLogpushJobOutputOptionsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `job_id_input`<sup>Optional</sup> <a name="job_id_input" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.jobIdInput"></a>

```python
job_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.jobId"></a>

```python
job_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLogpushJobConfig <a name="DataCloudflareLogpushJobConfig" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_logpush_job

dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str = None,
  job_id: typing.Union[int, float] = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.accountId">account_id</a></code> | <code>str</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.jobId">job_id</a></code> | <code>typing.Union[int, float]</code> | Unique id of the job. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/logpush_job#account_id DataCloudflareLogpushJob#account_id}

---

##### `job_id`<sup>Optional</sup> <a name="job_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.jobId"></a>

```python
job_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Unique id of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/logpush_job#job_id DataCloudflareLogpushJob#job_id}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/logpush_job#zone_id DataCloudflareLogpushJob#zone_id}

---

### DataCloudflareLogpushJobOutputOptions <a name="DataCloudflareLogpushJobOutputOptions" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_logpush_job

dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLogpushJobOutputOptionsOutputReference <a name="DataCloudflareLogpushJobOutputOptionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_logpush_job

dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.batchPrefix">batch_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.batchSuffix">batch_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.cve202144228">cve202144228</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.fieldNames">field_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.recordPrefix">record_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.recordSuffix">record_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.recordTemplate">record_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.sampleRate">sample_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptions">DataCloudflareLogpushJobOutputOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_prefix`<sup>Required</sup> <a name="batch_prefix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.batchPrefix"></a>

```python
batch_prefix: str
```

- *Type:* str

---

##### `batch_suffix`<sup>Required</sup> <a name="batch_suffix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.batchSuffix"></a>

```python
batch_suffix: str
```

- *Type:* str

---

##### `cve202144228`<sup>Required</sup> <a name="cve202144228" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.cve202144228"></a>

```python
cve202144228: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `field_names`<sup>Required</sup> <a name="field_names" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.fieldNames"></a>

```python
field_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `record_delimiter`<sup>Required</sup> <a name="record_delimiter" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

---

##### `record_prefix`<sup>Required</sup> <a name="record_prefix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.recordPrefix"></a>

```python
record_prefix: str
```

- *Type:* str

---

##### `record_suffix`<sup>Required</sup> <a name="record_suffix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.recordSuffix"></a>

```python
record_suffix: str
```

- *Type:* str

---

##### `record_template`<sup>Required</sup> <a name="record_template" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.recordTemplate"></a>

```python
record_template: str
```

- *Type:* str

---

##### `sample_rate`<sup>Required</sup> <a name="sample_rate" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.sampleRate"></a>

```python
sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareLogpushJobOutputOptions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptions">DataCloudflareLogpushJobOutputOptions</a>

---



