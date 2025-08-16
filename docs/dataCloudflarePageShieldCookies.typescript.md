# `dataCloudflarePageShieldCookies` Submodule <a name="`dataCloudflarePageShieldCookies` Submodule" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePageShieldCookies <a name="DataCloudflarePageShieldCookies" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/page_shield_cookies cloudflare_page_shield_cookies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.Initializer"></a>

```typescript
import { dataCloudflarePageShieldCookies } from '@cdktf/provider-cloudflare'

new dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies(scope: Construct, id: string, config: DataCloudflarePageShieldCookiesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig">DataCloudflarePageShieldCookiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig">DataCloudflarePageShieldCookiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflarePageShieldCookies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isConstruct"></a>

```typescript
import { dataCloudflarePageShieldCookies } from '@cdktf/provider-cloudflare'

dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isTerraformElement"></a>

```typescript
import { dataCloudflarePageShieldCookies } from '@cdktf/provider-cloudflare'

dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isTerraformDataSource"></a>

```typescript
import { dataCloudflarePageShieldCookies } from '@cdktf/provider-cloudflare'

dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.generateConfigForImport"></a>

```typescript
import { dataCloudflarePageShieldCookies } from '@cdktf/provider-cloudflare'

dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflarePageShieldCookies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflarePageShieldCookies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflarePageShieldCookies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/page_shield_cookies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflarePageShieldCookies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.domainAttribute">domainAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.expiresAttribute">expiresAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.firstSeenAt">firstSeenAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.httpOnlyAttribute">httpOnlyAttribute</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.lastSeenAt">lastSeenAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.maxAgeAttribute">maxAgeAttribute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.pageUrls">pageUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.pathAttribute">pathAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.sameSiteAttribute">sameSiteAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.secureAttribute">secureAttribute</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.cookieIdInput">cookieIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.cookieId">cookieId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `domainAttribute`<sup>Required</sup> <a name="domainAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.domainAttribute"></a>

```typescript
public readonly domainAttribute: string;
```

- *Type:* string

---

##### `expiresAttribute`<sup>Required</sup> <a name="expiresAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.expiresAttribute"></a>

```typescript
public readonly expiresAttribute: string;
```

- *Type:* string

---

##### `firstSeenAt`<sup>Required</sup> <a name="firstSeenAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.firstSeenAt"></a>

```typescript
public readonly firstSeenAt: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `httpOnlyAttribute`<sup>Required</sup> <a name="httpOnlyAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.httpOnlyAttribute"></a>

```typescript
public readonly httpOnlyAttribute: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastSeenAt`<sup>Required</sup> <a name="lastSeenAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.lastSeenAt"></a>

```typescript
public readonly lastSeenAt: string;
```

- *Type:* string

---

##### `maxAgeAttribute`<sup>Required</sup> <a name="maxAgeAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.maxAgeAttribute"></a>

```typescript
public readonly maxAgeAttribute: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pageUrls`<sup>Required</sup> <a name="pageUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.pageUrls"></a>

```typescript
public readonly pageUrls: string[];
```

- *Type:* string[]

---

##### `pathAttribute`<sup>Required</sup> <a name="pathAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.pathAttribute"></a>

```typescript
public readonly pathAttribute: string;
```

- *Type:* string

---

##### `sameSiteAttribute`<sup>Required</sup> <a name="sameSiteAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.sameSiteAttribute"></a>

```typescript
public readonly sameSiteAttribute: string;
```

- *Type:* string

---

##### `secureAttribute`<sup>Required</sup> <a name="secureAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.secureAttribute"></a>

```typescript
public readonly secureAttribute: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `cookieIdInput`<sup>Optional</sup> <a name="cookieIdInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.cookieIdInput"></a>

```typescript
public readonly cookieIdInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `cookieId`<sup>Required</sup> <a name="cookieId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.cookieId"></a>

```typescript
public readonly cookieId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePageShieldCookiesConfig <a name="DataCloudflarePageShieldCookiesConfig" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.Initializer"></a>

```typescript
import { dataCloudflarePageShieldCookies } from '@cdktf/provider-cloudflare'

const dataCloudflarePageShieldCookiesConfig: dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.cookieId">cookieId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cookieId`<sup>Required</sup> <a name="cookieId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.cookieId"></a>

```typescript
public readonly cookieId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/page_shield_cookies#cookie_id DataCloudflarePageShieldCookies#cookie_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/page_shield_cookies#zone_id DataCloudflarePageShieldCookies#zone_id}

---



