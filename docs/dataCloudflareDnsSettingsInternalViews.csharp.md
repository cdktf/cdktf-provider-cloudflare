# `dataCloudflareDnsSettingsInternalViews` Submodule <a name="`dataCloudflareDnsSettingsInternalViews` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsSettingsInternalViews <a name="DataCloudflareDnsSettingsInternalViews" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views cloudflare_dns_settings_internal_views}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareDnsSettingsInternalViews(Construct Scope, string Id, DataCloudflareDnsSettingsInternalViewsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig">DataCloudflareDnsSettingsInternalViewsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig">DataCloudflareDnsSettingsInternalViewsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.putName">PutName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetZoneId">ResetZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetZoneName">ResetZoneName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutName` <a name="PutName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.putName"></a>

```csharp
private void PutName(DataCloudflareDnsSettingsInternalViewsName Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName">DataCloudflareDnsSettingsInternalViewsName</a>

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetMatch"></a>

```csharp
private void ResetMatch()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

##### `ResetZoneName` <a name="ResetZoneName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetZoneName"></a>

```csharp
private void ResetZoneName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareDnsSettingsInternalViews resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareDnsSettingsInternalViews.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareDnsSettingsInternalViews.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareDnsSettingsInternalViews.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareDnsSettingsInternalViews.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareDnsSettingsInternalViews resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareDnsSettingsInternalViews to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareDnsSettingsInternalViews that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsSettingsInternalViews to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.name">Name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference">DataCloudflareDnsSettingsInternalViewsNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList">DataCloudflareDnsSettingsInternalViewsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.matchInput">MatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.nameInput">NameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.zoneNameInput">ZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.match">Match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.zoneName">ZoneName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.name"></a>

```csharp
public DataCloudflareDnsSettingsInternalViewsNameOutputReference Name { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference">DataCloudflareDnsSettingsInternalViewsNameOutputReference</a>

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.result"></a>

```csharp
public DataCloudflareDnsSettingsInternalViewsResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList">DataCloudflareDnsSettingsInternalViewsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.matchInput"></a>

```csharp
public string MatchInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.nameInput"></a>

```csharp
public object NameInput { get; }
```

- *Type:* object

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `ZoneNameInput`<sup>Optional</sup> <a name="ZoneNameInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.zoneNameInput"></a>

```csharp
public string ZoneNameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.match"></a>

```csharp
public string Match { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.zoneName"></a>

```csharp
public string ZoneName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsSettingsInternalViewsConfig <a name="DataCloudflareDnsSettingsInternalViewsConfig" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareDnsSettingsInternalViewsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Direction = null,
    string Match = null,
    double MaxItems = null,
    DataCloudflareDnsSettingsInternalViewsName Name = null,
    string Order = null,
    string ZoneId = null,
    string ZoneName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.direction">Direction</a></code> | <code>string</code> | Direction to order DNS views in. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.match">Match</a></code> | <code>string</code> | Whether to match all search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.name">Name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName">DataCloudflareDnsSettingsInternalViewsName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#name DataCloudflareDnsSettingsInternalViews#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.order">Order</a></code> | <code>string</code> | Field to order DNS views by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | A zone ID that exists in the zones list for the view. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.zoneName">ZoneName</a></code> | <code>string</code> | A zone name that exists in the zones list for the view. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#account_id DataCloudflareDnsSettingsInternalViews#account_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Direction to order DNS views in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#direction DataCloudflareDnsSettingsInternalViews#direction}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.match"></a>

```csharp
public string Match { get; set; }
```

- *Type:* string

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#match DataCloudflareDnsSettingsInternalViews#match}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#max_items DataCloudflareDnsSettingsInternalViews#max_items}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.name"></a>

```csharp
public DataCloudflareDnsSettingsInternalViewsName Name { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName">DataCloudflareDnsSettingsInternalViewsName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#name DataCloudflareDnsSettingsInternalViews#name}.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to order DNS views by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#order DataCloudflareDnsSettingsInternalViews#order}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

A zone ID that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#zone_id DataCloudflareDnsSettingsInternalViews#zone_id}

---

##### `ZoneName`<sup>Optional</sup> <a name="ZoneName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.zoneName"></a>

```csharp
public string ZoneName { get; set; }
```

- *Type:* string

A zone name that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#zone_name DataCloudflareDnsSettingsInternalViews#zone_name}

---

### DataCloudflareDnsSettingsInternalViewsName <a name="DataCloudflareDnsSettingsInternalViewsName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareDnsSettingsInternalViewsName {
    string Contains = null,
    string Endswith = null,
    string Exact = null,
    string Startswith = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.property.contains">Contains</a></code> | <code>string</code> | Substring of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.property.endswith">Endswith</a></code> | <code>string</code> | Suffix of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.property.exact">Exact</a></code> | <code>string</code> | Exact value of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.property.startswith">Startswith</a></code> | <code>string</code> | Prefix of the DNS view name. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.property.contains"></a>

```csharp
public string Contains { get; set; }
```

- *Type:* string

Substring of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#contains DataCloudflareDnsSettingsInternalViews#contains}

---

##### `Endswith`<sup>Optional</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.property.endswith"></a>

```csharp
public string Endswith { get; set; }
```

- *Type:* string

Suffix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#endswith DataCloudflareDnsSettingsInternalViews#endswith}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Exact value of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#exact DataCloudflareDnsSettingsInternalViews#exact}

---

##### `Startswith`<sup>Optional</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.property.startswith"></a>

```csharp
public string Startswith { get; set; }
```

- *Type:* string

Prefix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#startswith DataCloudflareDnsSettingsInternalViews#startswith}

---

### DataCloudflareDnsSettingsInternalViewsResult <a name="DataCloudflareDnsSettingsInternalViewsResult" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareDnsSettingsInternalViewsResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareDnsSettingsInternalViewsNameOutputReference <a name="DataCloudflareDnsSettingsInternalViewsNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareDnsSettingsInternalViewsNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resetEndswith">ResetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resetStartswith">ResetStartswith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resetContains"></a>

```csharp
private void ResetContains()
```

##### `ResetEndswith` <a name="ResetEndswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resetEndswith"></a>

```csharp
private void ResetEndswith()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resetExact"></a>

```csharp
private void ResetExact()
```

##### `ResetStartswith` <a name="ResetStartswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resetStartswith"></a>

```csharp
private void ResetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.containsInput">ContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.endswithInput">EndswithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.startswithInput">StartswithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.contains">Contains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.endswith">Endswith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.startswith">Startswith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.containsInput"></a>

```csharp
public string ContainsInput { get; }
```

- *Type:* string

---

##### `EndswithInput`<sup>Optional</sup> <a name="EndswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.endswithInput"></a>

```csharp
public string EndswithInput { get; }
```

- *Type:* string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `StartswithInput`<sup>Optional</sup> <a name="StartswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.startswithInput"></a>

```csharp
public string StartswithInput { get; }
```

- *Type:* string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.contains"></a>

```csharp
public string Contains { get; }
```

- *Type:* string

---

##### `Endswith`<sup>Required</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.endswith"></a>

```csharp
public string Endswith { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `Startswith`<sup>Required</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.startswith"></a>

```csharp
public string Startswith { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataCloudflareDnsSettingsInternalViewsResultList <a name="DataCloudflareDnsSettingsInternalViewsResultList" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareDnsSettingsInternalViewsResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.get"></a>

```csharp
private DataCloudflareDnsSettingsInternalViewsResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareDnsSettingsInternalViewsResultOutputReference <a name="DataCloudflareDnsSettingsInternalViewsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareDnsSettingsInternalViewsResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.modifiedTime">ModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResult">DataCloudflareDnsSettingsInternalViewsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedTime`<sup>Required</sup> <a name="ModifiedTime" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.modifiedTime"></a>

```csharp
public string ModifiedTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareDnsSettingsInternalViewsResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResult">DataCloudflareDnsSettingsInternalViewsResult</a>

---



