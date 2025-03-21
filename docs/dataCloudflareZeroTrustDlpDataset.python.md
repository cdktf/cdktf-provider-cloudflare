# `dataCloudflareZeroTrustDlpDataset` Submodule <a name="`dataCloudflareZeroTrustDlpDataset` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpDataset <a name="DataCloudflareZeroTrustDlpDataset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_dlp_dataset cloudflare_zero_trust_dlp_dataset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_dataset

dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset(
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
  dataset_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_dlp_dataset#account_id DataCloudflareZeroTrustDlpDataset#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.datasetId">dataset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_dlp_dataset#dataset_id DataCloudflareZeroTrustDlpDataset#dataset_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_dlp_dataset#account_id DataCloudflareZeroTrustDlpDataset#account_id}.

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.Initializer.parameter.datasetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_dlp_dataset#dataset_id DataCloudflareZeroTrustDlpDataset#dataset_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDlpDataset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_dataset

dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_dataset

dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_dataset

dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_dataset

dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDlpDataset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustDlpDataset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustDlpDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_dlp_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList">DataCloudflareZeroTrustDlpDatasetColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.encodingVersion">encoding_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.numCells">num_cells</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.secret">secret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.uploads">uploads</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList">DataCloudflareZeroTrustDlpDatasetUploadsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.columns"></a>

```python
columns: DataCloudflareZeroTrustDlpDatasetColumnsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList">DataCloudflareZeroTrustDlpDatasetColumnsList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `encoding_version`<sup>Required</sup> <a name="encoding_version" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.encodingVersion"></a>

```python
encoding_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `num_cells`<sup>Required</sup> <a name="num_cells" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.numCells"></a>

```python
num_cells: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.secret"></a>

```python
secret: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `uploads`<sup>Required</sup> <a name="uploads" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.uploads"></a>

```python
uploads: DataCloudflareZeroTrustDlpDatasetUploadsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList">DataCloudflareZeroTrustDlpDatasetUploadsList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDataset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpDatasetColumns <a name="DataCloudflareZeroTrustDlpDatasetColumns" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_dataset

dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumns()
```


### DataCloudflareZeroTrustDlpDatasetConfig <a name="DataCloudflareZeroTrustDlpDatasetConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_dataset

dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  dataset_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_dlp_dataset#account_id DataCloudflareZeroTrustDlpDataset#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.datasetId">dataset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_dlp_dataset#dataset_id DataCloudflareZeroTrustDlpDataset#dataset_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_dlp_dataset#account_id DataCloudflareZeroTrustDlpDataset#account_id}.

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetConfig.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_dlp_dataset#dataset_id DataCloudflareZeroTrustDlpDataset#dataset_id}.

---

### DataCloudflareZeroTrustDlpDatasetUploads <a name="DataCloudflareZeroTrustDlpDatasetUploads" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploads"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploads.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_dataset

dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploads()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpDatasetColumnsList <a name="DataCloudflareZeroTrustDlpDatasetColumnsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_dataset

dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDlpDatasetColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDlpDatasetColumnsOutputReference <a name="DataCloudflareZeroTrustDlpDatasetColumnsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_dataset

dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.property.entryId">entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.property.numCells">num_cells</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.property.uploadStatus">upload_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumns">DataCloudflareZeroTrustDlpDatasetColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entry_id`<sup>Required</sup> <a name="entry_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.property.entryId"></a>

```python
entry_id: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `num_cells`<sup>Required</sup> <a name="num_cells" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.property.numCells"></a>

```python
num_cells: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `upload_status`<sup>Required</sup> <a name="upload_status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.property.uploadStatus"></a>

```python
upload_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDlpDatasetColumns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetColumns">DataCloudflareZeroTrustDlpDatasetColumns</a>

---


### DataCloudflareZeroTrustDlpDatasetUploadsList <a name="DataCloudflareZeroTrustDlpDatasetUploadsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_dataset

dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDlpDatasetUploadsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDlpDatasetUploadsOutputReference <a name="DataCloudflareZeroTrustDlpDatasetUploadsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_dataset

dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.property.numCells">num_cells</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploads">DataCloudflareZeroTrustDlpDatasetUploads</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `num_cells`<sup>Required</sup> <a name="num_cells" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.property.numCells"></a>

```python
num_cells: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDlpDatasetUploads
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpDataset.DataCloudflareZeroTrustDlpDatasetUploads">DataCloudflareZeroTrustDlpDatasetUploads</a>

---



