# `dataCloudflareAccessRules` Submodule <a name="`dataCloudflareAccessRules` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAccessRules <a name="DataCloudflareAccessRules" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/access_rules cloudflare_access_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccessRules(Construct Scope, string Id, DataCloudflareAccessRulesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig">DataCloudflareAccessRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig">DataCloudflareAccessRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.putConfiguration"></a>

```csharp
private void PutConfiguration(DataCloudflareAccessRulesConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfiguration">DataCloudflareAccessRulesConfiguration</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetMatch"></a>

```csharp
private void ResetMatch()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetNotes"></a>

```csharp
private void ResetNotes()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareAccessRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareAccessRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareAccessRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareAccessRules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareAccessRules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareAccessRules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareAccessRules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareAccessRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/access_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareAccessRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference">DataCloudflareAccessRulesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList">DataCloudflareAccessRulesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.configurationInput">ConfigurationInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfiguration">DataCloudflareAccessRulesConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.matchInput">MatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.notesInput">NotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.match">Match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.notes">Notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.configuration"></a>

```csharp
public DataCloudflareAccessRulesConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference">DataCloudflareAccessRulesConfigurationOutputReference</a>

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.result"></a>

```csharp
public DataCloudflareAccessRulesResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList">DataCloudflareAccessRulesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.configurationInput"></a>

```csharp
public IResolvable|DataCloudflareAccessRulesConfiguration ConfigurationInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfiguration">DataCloudflareAccessRulesConfiguration</a>

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.matchInput"></a>

```csharp
public string MatchInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.notesInput"></a>

```csharp
public string NotesInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.match"></a>

```csharp
public string Match { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.notes"></a>

```csharp
public string Notes { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAccessRulesConfig <a name="DataCloudflareAccessRulesConfig" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccessRulesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null,
    DataCloudflareAccessRulesConfiguration Configuration = null,
    string Direction = null,
    string Match = null,
    double MaxItems = null,
    string Mode = null,
    string Notes = null,
    string Order = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.accountId">AccountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfiguration">DataCloudflareAccessRulesConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/access_rules#configuration DataCloudflareAccessRules#configuration}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.direction">Direction</a></code> | <code>string</code> | Defines the direction used to sort returned rules. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.match">Match</a></code> | <code>string</code> | Defines the search requirements. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.mode">Mode</a></code> | <code>string</code> | The action to apply to a matched request. Available values: "block", "challenge", "whitelist", "js_challenge", "managed_challenge". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.notes">Notes</a></code> | <code>string</code> | Defines the string to search for in the notes of existing IP Access rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.order">Order</a></code> | <code>string</code> | Defines the field used to sort returned rules. Available values: "configuration.target", "configuration.value", "mode". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/access_rules#account_id DataCloudflareAccessRules#account_id}

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.configuration"></a>

```csharp
public DataCloudflareAccessRulesConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfiguration">DataCloudflareAccessRulesConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/access_rules#configuration DataCloudflareAccessRules#configuration}.

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Defines the direction used to sort returned rules. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/access_rules#direction DataCloudflareAccessRules#direction}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.match"></a>

```csharp
public string Match { get; set; }
```

- *Type:* string

Defines the search requirements.

When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/access_rules#match DataCloudflareAccessRules#match}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/access_rules#max_items DataCloudflareAccessRules#max_items}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The action to apply to a matched request. Available values: "block", "challenge", "whitelist", "js_challenge", "managed_challenge".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/access_rules#mode DataCloudflareAccessRules#mode}

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.notes"></a>

```csharp
public string Notes { get; set; }
```

- *Type:* string

Defines the string to search for in the notes of existing IP Access rules.

Notes: For example, the string 'attack' would match IP Access rules with notes 'Attack 26/02' and 'Attack 27/02'. The search is case insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/access_rules#notes DataCloudflareAccessRules#notes}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Defines the field used to sort returned rules. Available values: "configuration.target", "configuration.value", "mode".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/access_rules#order DataCloudflareAccessRules#order}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/access_rules#zone_id DataCloudflareAccessRules#zone_id}

---

### DataCloudflareAccessRulesConfiguration <a name="DataCloudflareAccessRulesConfiguration" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccessRulesConfiguration {
    string Target = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfiguration.property.target">Target</a></code> | <code>string</code> | Defines the target to search in existing rules. Available values: "ip", "ip_range", "asn", "country". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfiguration.property.value">Value</a></code> | <code>string</code> | Defines the target value to search for in existing rules: an IP address, an IP address range, or a country code, depending on the provided `configuration.target`. Notes: You can search for a single IPv4 address, an IP address range with a subnet of '/16' or '/24', or a two-letter ISO-3166-1 alpha-2 country code. |

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfiguration.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Defines the target to search in existing rules. Available values: "ip", "ip_range", "asn", "country".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/access_rules#target DataCloudflareAccessRules#target}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfiguration.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Defines the target value to search for in existing rules: an IP address, an IP address range, or a country code, depending on the provided `configuration.target`. Notes: You can search for a single IPv4 address, an IP address range with a subnet of '/16' or '/24', or a two-letter ISO-3166-1 alpha-2 country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/access_rules#value DataCloudflareAccessRules#value}

---

### DataCloudflareAccessRulesResult <a name="DataCloudflareAccessRulesResult" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccessRulesResult {

};
```


### DataCloudflareAccessRulesResultConfiguration <a name="DataCloudflareAccessRulesResultConfiguration" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccessRulesResultConfiguration {

};
```


### DataCloudflareAccessRulesResultScope <a name="DataCloudflareAccessRulesResultScope" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccessRulesResultScope {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAccessRulesConfigurationOutputReference <a name="DataCloudflareAccessRulesConfigurationOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccessRulesConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfiguration">DataCloudflareAccessRulesConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareAccessRulesConfiguration InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesConfiguration">DataCloudflareAccessRulesConfiguration</a>

---


### DataCloudflareAccessRulesResultConfigurationOutputReference <a name="DataCloudflareAccessRulesResultConfigurationOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccessRulesResultConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfiguration">DataCloudflareAccessRulesResultConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAccessRulesResultConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfiguration">DataCloudflareAccessRulesResultConfiguration</a>

---


### DataCloudflareAccessRulesResultList <a name="DataCloudflareAccessRulesResultList" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccessRulesResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.get"></a>

```csharp
private DataCloudflareAccessRulesResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareAccessRulesResultOutputReference <a name="DataCloudflareAccessRulesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccessRulesResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.allowedModes">AllowedModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference">DataCloudflareAccessRulesResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.notes">Notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference">DataCloudflareAccessRulesResultScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResult">DataCloudflareAccessRulesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedModes`<sup>Required</sup> <a name="AllowedModes" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.allowedModes"></a>

```csharp
public string[] AllowedModes { get; }
```

- *Type:* string[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.configuration"></a>

```csharp
public DataCloudflareAccessRulesResultConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultConfigurationOutputReference">DataCloudflareAccessRulesResultConfigurationOutputReference</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.notes"></a>

```csharp
public string Notes { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.scope"></a>

```csharp
public DataCloudflareAccessRulesResultScopeOutputReference Scope { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference">DataCloudflareAccessRulesResultScopeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAccessRulesResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResult">DataCloudflareAccessRulesResult</a>

---


### DataCloudflareAccessRulesResultScopeOutputReference <a name="DataCloudflareAccessRulesResultScopeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccessRulesResultScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScope">DataCloudflareAccessRulesResultScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScopeOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAccessRulesResultScope InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccessRules.DataCloudflareAccessRulesResultScope">DataCloudflareAccessRulesResultScope</a>

---



