# `dataCloudflareAccountDnsSettingsInternalViews` Submodule <a name="`dataCloudflareAccountDnsSettingsInternalViews` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAccountDnsSettingsInternalViews <a name="DataCloudflareAccountDnsSettingsInternalViews" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views cloudflare_account_dns_settings_internal_views}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettingsInternalViews } from '@cdktf/provider-cloudflare'

new dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews(scope: Construct, id: string, config: DataCloudflareAccountDnsSettingsInternalViewsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig">DataCloudflareAccountDnsSettingsInternalViewsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig">DataCloudflareAccountDnsSettingsInternalViewsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.putName">putName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetZoneId">resetZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetZoneName">resetZoneName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putName` <a name="putName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.putName"></a>

```typescript
public putName(value: DataCloudflareAccountDnsSettingsInternalViewsName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName">DataCloudflareAccountDnsSettingsInternalViewsName</a>

---

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetMatch"></a>

```typescript
public resetMatch(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

##### `resetZoneName` <a name="resetZoneName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetZoneName"></a>

```typescript
public resetZoneName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareAccountDnsSettingsInternalViews resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isConstruct"></a>

```typescript
import { dataCloudflareAccountDnsSettingsInternalViews } from '@cdktf/provider-cloudflare'

dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformElement"></a>

```typescript
import { dataCloudflareAccountDnsSettingsInternalViews } from '@cdktf/provider-cloudflare'

dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformDataSource"></a>

```typescript
import { dataCloudflareAccountDnsSettingsInternalViews } from '@cdktf/provider-cloudflare'

dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport"></a>

```typescript
import { dataCloudflareAccountDnsSettingsInternalViews } from '@cdktf/provider-cloudflare'

dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareAccountDnsSettingsInternalViews resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareAccountDnsSettingsInternalViews to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareAccountDnsSettingsInternalViews that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareAccountDnsSettingsInternalViews to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference">DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList">DataCloudflareAccountDnsSettingsInternalViewsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.matchInput">matchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.nameInput">nameInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName">DataCloudflareAccountDnsSettingsInternalViewsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneNameInput">zoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.match">match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.name"></a>

```typescript
public readonly name: DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference">DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference</a>

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.result"></a>

```typescript
public readonly result: DataCloudflareAccountDnsSettingsInternalViewsResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList">DataCloudflareAccountDnsSettingsInternalViewsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.matchInput"></a>

```typescript
public readonly matchInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.nameInput"></a>

```typescript
public readonly nameInput: IResolvable | DataCloudflareAccountDnsSettingsInternalViewsName;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName">DataCloudflareAccountDnsSettingsInternalViewsName</a>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneNameInput"></a>

```typescript
public readonly zoneNameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAccountDnsSettingsInternalViewsConfig <a name="DataCloudflareAccountDnsSettingsInternalViewsConfig" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettingsInternalViews } from '@cdktf/provider-cloudflare'

const dataCloudflareAccountDnsSettingsInternalViewsConfig: dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.direction">direction</a></code> | <code>string</code> | Direction to order DNS views in. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.match">match</a></code> | <code>string</code> | Whether to match all search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName">DataCloudflareAccountDnsSettingsInternalViewsName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#name DataCloudflareAccountDnsSettingsInternalViews#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.order">order</a></code> | <code>string</code> | Field to order DNS views by. Available values: "name", "created_on", "modified_on". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | A zone ID that exists in the zones list for the view. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.zoneName">zoneName</a></code> | <code>string</code> | A zone name that exists in the zones list for the view. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#account_id DataCloudflareAccountDnsSettingsInternalViews#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Direction to order DNS views in. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#direction DataCloudflareAccountDnsSettingsInternalViews#direction}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#match DataCloudflareAccountDnsSettingsInternalViews#match}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#max_items DataCloudflareAccountDnsSettingsInternalViews#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.name"></a>

```typescript
public readonly name: DataCloudflareAccountDnsSettingsInternalViewsName;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName">DataCloudflareAccountDnsSettingsInternalViewsName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#name DataCloudflareAccountDnsSettingsInternalViews#name}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to order DNS views by. Available values: "name", "created_on", "modified_on".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#order DataCloudflareAccountDnsSettingsInternalViews#order}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

A zone ID that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#zone_id DataCloudflareAccountDnsSettingsInternalViews#zone_id}

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

A zone name that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#zone_name DataCloudflareAccountDnsSettingsInternalViews#zone_name}

---

### DataCloudflareAccountDnsSettingsInternalViewsName <a name="DataCloudflareAccountDnsSettingsInternalViewsName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettingsInternalViews } from '@cdktf/provider-cloudflare'

const dataCloudflareAccountDnsSettingsInternalViewsName: dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.contains">contains</a></code> | <code>string</code> | Substring of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.endswith">endswith</a></code> | <code>string</code> | Suffix of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.exact">exact</a></code> | <code>string</code> | Exact value of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.startswith">startswith</a></code> | <code>string</code> | Prefix of the DNS view name. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.contains"></a>

```typescript
public readonly contains: string;
```

- *Type:* string

Substring of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#contains DataCloudflareAccountDnsSettingsInternalViews#contains}

---

##### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.endswith"></a>

```typescript
public readonly endswith: string;
```

- *Type:* string

Suffix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#endswith DataCloudflareAccountDnsSettingsInternalViews#endswith}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

Exact value of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#exact DataCloudflareAccountDnsSettingsInternalViews#exact}

---

##### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.startswith"></a>

```typescript
public readonly startswith: string;
```

- *Type:* string

Prefix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#startswith DataCloudflareAccountDnsSettingsInternalViews#startswith}

---

### DataCloudflareAccountDnsSettingsInternalViewsResult <a name="DataCloudflareAccountDnsSettingsInternalViewsResult" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResult.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettingsInternalViews } from '@cdktf/provider-cloudflare'

const dataCloudflareAccountDnsSettingsInternalViewsResult: dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference <a name="DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettingsInternalViews } from '@cdktf/provider-cloudflare'

new dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetEndswith">resetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetStartswith">resetStartswith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetContains"></a>

```typescript
public resetContains(): void
```

##### `resetEndswith` <a name="resetEndswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetEndswith"></a>

```typescript
public resetEndswith(): void
```

##### `resetExact` <a name="resetExact" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetExact"></a>

```typescript
public resetExact(): void
```

##### `resetStartswith` <a name="resetStartswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetStartswith"></a>

```typescript
public resetStartswith(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.containsInput">containsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.endswithInput">endswithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.exactInput">exactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.startswithInput">startswithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.contains">contains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.endswith">endswith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.startswith">startswith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName">DataCloudflareAccountDnsSettingsInternalViewsName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.containsInput"></a>

```typescript
public readonly containsInput: string;
```

- *Type:* string

---

##### `endswithInput`<sup>Optional</sup> <a name="endswithInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.endswithInput"></a>

```typescript
public readonly endswithInput: string;
```

- *Type:* string

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.exactInput"></a>

```typescript
public readonly exactInput: string;
```

- *Type:* string

---

##### `startswithInput`<sup>Optional</sup> <a name="startswithInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.startswithInput"></a>

```typescript
public readonly startswithInput: string;
```

- *Type:* string

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.contains"></a>

```typescript
public readonly contains: string;
```

- *Type:* string

---

##### `endswith`<sup>Required</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.endswith"></a>

```typescript
public readonly endswith: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `startswith`<sup>Required</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.startswith"></a>

```typescript
public readonly startswith: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareAccountDnsSettingsInternalViewsName;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName">DataCloudflareAccountDnsSettingsInternalViewsName</a>

---


### DataCloudflareAccountDnsSettingsInternalViewsResultList <a name="DataCloudflareAccountDnsSettingsInternalViewsResultList" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettingsInternalViews } from '@cdktf/provider-cloudflare'

new dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference <a name="DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettingsInternalViews } from '@cdktf/provider-cloudflare'

new dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.modifiedTime">modifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResult">DataCloudflareAccountDnsSettingsInternalViewsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedTime`<sup>Required</sup> <a name="modifiedTime" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.modifiedTime"></a>

```typescript
public readonly modifiedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareAccountDnsSettingsInternalViewsResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResult">DataCloudflareAccountDnsSettingsInternalViewsResult</a>

---



