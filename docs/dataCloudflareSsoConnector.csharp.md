# `dataCloudflareSsoConnector` Submodule <a name="`dataCloudflareSsoConnector` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSsoConnector <a name="DataCloudflareSsoConnector" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/sso_connector cloudflare_sso_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareSsoConnector(Construct Scope, string Id, DataCloudflareSsoConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig">DataCloudflareSsoConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig">DataCloudflareSsoConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareSsoConnector resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareSsoConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareSsoConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareSsoConnector.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareSsoConnector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareSsoConnector resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareSsoConnector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareSsoConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/sso_connector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareSsoConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.emailDomain">EmailDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.updatedOn">UpdatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.useFedrampLanguage">UseFedrampLanguage</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.verification">Verification</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference">DataCloudflareSsoConnectorVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.ssoConnectorIdInput">SsoConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.ssoConnectorId">SsoConnectorId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.emailDomain"></a>

```csharp
public string EmailDomain { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.updatedOn"></a>

```csharp
public string UpdatedOn { get; }
```

- *Type:* string

---

##### `UseFedrampLanguage`<sup>Required</sup> <a name="UseFedrampLanguage" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.useFedrampLanguage"></a>

```csharp
public IResolvable UseFedrampLanguage { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Verification`<sup>Required</sup> <a name="Verification" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.verification"></a>

```csharp
public DataCloudflareSsoConnectorVerificationOutputReference Verification { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference">DataCloudflareSsoConnectorVerificationOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `SsoConnectorIdInput`<sup>Optional</sup> <a name="SsoConnectorIdInput" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.ssoConnectorIdInput"></a>

```csharp
public string SsoConnectorIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `SsoConnectorId`<sup>Required</sup> <a name="SsoConnectorId" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.ssoConnectorId"></a>

```csharp
public string SsoConnectorId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSsoConnectorConfig <a name="DataCloudflareSsoConnectorConfig" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareSsoConnectorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string SsoConnectorId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.accountId">AccountId</a></code> | <code>string</code> | Account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.ssoConnectorId">SsoConnectorId</a></code> | <code>string</code> | SSO Connector identifier tag. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/sso_connector#account_id DataCloudflareSsoConnector#account_id}

---

##### `SsoConnectorId`<sup>Required</sup> <a name="SsoConnectorId" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorConfig.property.ssoConnectorId"></a>

```csharp
public string SsoConnectorId { get; set; }
```

- *Type:* string

SSO Connector identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/sso_connector#sso_connector_id DataCloudflareSsoConnector#sso_connector_id}

---

### DataCloudflareSsoConnectorVerification <a name="DataCloudflareSsoConnectorVerification" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareSsoConnectorVerification {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareSsoConnectorVerificationOutputReference <a name="DataCloudflareSsoConnectorVerificationOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareSsoConnectorVerificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerification">DataCloudflareSsoConnectorVerification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerificationOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareSsoConnectorVerification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSsoConnector.DataCloudflareSsoConnectorVerification">DataCloudflareSsoConnectorVerification</a>

---



