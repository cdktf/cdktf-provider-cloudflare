# `dataCloudflareCloudforceOneRequestAsset` Submodule <a name="`dataCloudflareCloudforceOneRequestAsset` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCloudforceOneRequestAsset <a name="DataCloudflareCloudforceOneRequestAsset" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_cloudforce_one_request_asset

dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_identifier: str,
  asset_identifer: str,
  request_identifier: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.accountIdentifier">account_identifier</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.assetIdentifer">asset_identifer</a></code> | <code>str</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.requestIdentifier">request_identifier</a></code> | <code>str</code> | UUID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.accountIdentifier"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/cloudforce_one_request_asset#account_identifier DataCloudflareCloudforceOneRequestAsset#account_identifier}

---

##### `asset_identifer`<sup>Required</sup> <a name="asset_identifer" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.assetIdentifer"></a>

- *Type:* str

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/cloudforce_one_request_asset#asset_identifer DataCloudflareCloudforceOneRequestAsset#asset_identifer}

---

##### `request_identifier`<sup>Required</sup> <a name="request_identifier" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.requestIdentifier"></a>

- *Type:* str

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/cloudforce_one_request_asset#request_identifier DataCloudflareCloudforceOneRequestAsset#request_identifier}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_cloudforce_one_request_asset

dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_cloudforce_one_request_asset

dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_cloudforce_one_request_asset

dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_cloudforce_one_request_asset

dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareCloudforceOneRequestAsset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareCloudforceOneRequestAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/cloudforce_one_request_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareCloudforceOneRequestAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.fileType">file_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.accountIdentifierInput">account_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.assetIdentiferInput">asset_identifer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.requestIdentifierInput">request_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.accountIdentifier">account_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.assetIdentifer">asset_identifer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.requestIdentifier">request_identifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `file_type`<sup>Required</sup> <a name="file_type" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.fileType"></a>

```python
file_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `account_identifier_input`<sup>Optional</sup> <a name="account_identifier_input" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.accountIdentifierInput"></a>

```python
account_identifier_input: str
```

- *Type:* str

---

##### `asset_identifer_input`<sup>Optional</sup> <a name="asset_identifer_input" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.assetIdentiferInput"></a>

```python
asset_identifer_input: str
```

- *Type:* str

---

##### `request_identifier_input`<sup>Optional</sup> <a name="request_identifier_input" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.requestIdentifierInput"></a>

```python
request_identifier_input: str
```

- *Type:* str

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.accountIdentifier"></a>

```python
account_identifier: str
```

- *Type:* str

---

##### `asset_identifer`<sup>Required</sup> <a name="asset_identifer" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.assetIdentifer"></a>

```python
asset_identifer: str
```

- *Type:* str

---

##### `request_identifier`<sup>Required</sup> <a name="request_identifier" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.requestIdentifier"></a>

```python
request_identifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCloudforceOneRequestAssetConfig <a name="DataCloudflareCloudforceOneRequestAssetConfig" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_cloudforce_one_request_asset

dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_identifier: str,
  asset_identifer: str,
  request_identifier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.accountIdentifier">account_identifier</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.assetIdentifer">asset_identifer</a></code> | <code>str</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.requestIdentifier">request_identifier</a></code> | <code>str</code> | UUID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.accountIdentifier"></a>

```python
account_identifier: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/cloudforce_one_request_asset#account_identifier DataCloudflareCloudforceOneRequestAsset#account_identifier}

---

##### `asset_identifer`<sup>Required</sup> <a name="asset_identifer" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.assetIdentifer"></a>

```python
asset_identifer: str
```

- *Type:* str

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/cloudforce_one_request_asset#asset_identifer DataCloudflareCloudforceOneRequestAsset#asset_identifer}

---

##### `request_identifier`<sup>Required</sup> <a name="request_identifier" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.requestIdentifier"></a>

```python
request_identifier: str
```

- *Type:* str

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/cloudforce_one_request_asset#request_identifier DataCloudflareCloudforceOneRequestAsset#request_identifier}

---



