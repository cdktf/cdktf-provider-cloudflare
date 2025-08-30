# `dataCloudflareBotnetFeedConfigAsn` Submodule <a name="`dataCloudflareBotnetFeedConfigAsn` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareBotnetFeedConfigAsn <a name="DataCloudflareBotnetFeedConfigAsn" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/botnet_feed_config_asn cloudflare_botnet_feed_config_asn}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_botnet_feed_config_asn

dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/botnet_feed_config_asn#account_id DataCloudflareBotnetFeedConfigAsn#account_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareBotnetFeedConfigAsn resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_botnet_feed_config_asn

dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_botnet_feed_config_asn

dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_botnet_feed_config_asn

dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_botnet_feed_config_asn

dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareBotnetFeedConfigAsn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareBotnetFeedConfigAsn to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareBotnetFeedConfigAsn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/botnet_feed_config_asn#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareBotnetFeedConfigAsn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsn.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareBotnetFeedConfigAsnConfig <a name="DataCloudflareBotnetFeedConfigAsnConfig" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_botnet_feed_config_asn

dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareBotnetFeedConfigAsn.DataCloudflareBotnetFeedConfigAsnConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/botnet_feed_config_asn#account_id DataCloudflareBotnetFeedConfigAsn#account_id}

---



